import * as Config from "../src/config.json";

const passwordConfig = Config.default;


const containsCaptial = (data) => {
    return /[A-Z]/.test(data);
}

const containsDigits = (data) => {
    return /[0-9]/.test(data);
}

const containsSpecialChars = (data) => {
    return /[\W_]/.test(data);
}

const isCommonPassword = (data) => {
    return passwordConfig.commonPasswords.contains(data);
}


export const validateByConfig = (formData) => {

    if (passwordConfig.passwordLength > formData.password) {
        console.log("len")
        return false;
    }

    if (passwordConfig.mustContain.capitals) {
        if (!containsCaptial(formData.password)) {
            return false;
        }
    }

    if (passwordConfig.mustContain.digits) {
        if (!containsDigits(formData.password)) {
            return false;
        }
    }

    if (passwordConfig.mustContain.specialChars) {
        if (!containsSpecialChars(formData.password)) {
            return false;
        }
    }

    if (passwordConfig.mustContain.disallowCommonPassword) {
        if (isCommonPassword(formData.password)) {
            return false;
        }
    }

    if (formData.password !== formData.repeatPassword) {
        return false;
    }

    

    return true;

}