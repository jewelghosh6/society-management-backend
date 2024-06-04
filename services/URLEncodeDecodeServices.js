const crypto = require('crypto')
require('dotenv').config();

const encryptData = (data) => {
    const cipher = crypto.createCipher('aes-256-cbc', process.env.SECRET_KEY_CRYPTO);
    let encryptedData = cipher.update(data, 'utf8', 'hex');
    encryptedData += cipher.final('hex');
    console.log("encryptedData", encryptedData);
    return encryptedData;
};

// encryptData("jewel_ghosh_123");


const decryptData = (encryptedData) => {
    console.log("encryptedData inside decryptData::::::::::::::::", encryptedData);
    try {
        const decipher = crypto.createDecipher('aes-256-cbc', process.env.SECRET_KEY_CRYPTO);
        let decryptedData = decipher.update(encryptedData, 'hex', 'utf8');
        decryptedData += decipher.final('utf8');
        console.log("decryptedData", decryptedData);
        return decryptedData;
    } catch (error) {
        console.error("Error:+++++++++++ ", error);
    }

};
// decryptData("f4e011ceef915398d5dc33a65bf60cde");

module.exports = {
    encryptData, decryptData
}
