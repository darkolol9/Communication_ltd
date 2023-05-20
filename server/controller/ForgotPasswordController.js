
const { hashPassword } = require("../helpers");
const UserModel = require("../model/UserModel");



const resetPassword = async (req, res) => {
    let formData = req.body;

    let user = await UserModel.getUserByEmail(formData.email);

    if (!user) {
        res.send({status : 'user_doesnt_exist'})
    } else {
        //generate random code, send to user, 
        let secretCode = "12345" //generateCode()
        //write code in db
        await UserModel.updateSecretCode(formData.email, secretCode);
        res.send({status : 'success'})
    }

}

const verifyPasswordChange = async (req, res) => {

    let formData = req.body;
    let user = await UserModel.getUserByEmail(formData.email);

    if (! user[0]) {
        res.send({status : 'user_doesnt_exist'})
    }
    if (formData.secretCode !== user[0].secret_code) {
        res.send({status : 'invalid_code'})
    } else {
        formData.password = hashPassword(formData.password);
        await UserModel.updatePassword(formData.email, formData.password);
        res.send({status : 'success'});
    }

}



module.exports = {
    resetPassword,
    verifyPasswordChange
}