const crypto = require('crypto');

function generateRandomString(length) {
    return crypto.randomBytes(length)
        .toString('base64') // Convert to Base64 string
        .slice(0, length)    // Return required number of characters
        .replace(/\+/g, '0') // Replace '+' with '0' to ensure URL safety
        .replace(/\//g, '0'); // Replace '/' with '0' to ensure URL safety
}

// const randomString = generateRandomString(8);
// console.log(randomString);

module.exports = {
    generateRandomString
}