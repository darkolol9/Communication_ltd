
const UserModel = require("../model/UserModel");



const resetPassword = async (req, res) => {
    let formData = req.body;

    let user = await UserModel.getUserByEmail(formData.email);

    if (!user) {
        res.send({status : 'user_doesnt_exist'})
    } else {
        //generate random code, send to user, 
        //write code in db
        res.send({status : 'success'})
    }


}

const verifyPasswordChange = async (req, res) => {

    let formData = req.body;
    let user = await UserModel.getUserByEmail(formData.email);

    if (formData.secretCode !== user.sercert_code) {
        res.send({status : 'invalid_code'})
    } else {
        await UserModel.updatePassword(formData.email, formData.password);
    }

}



module.exports = {
    resetPassword
}