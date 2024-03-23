require("dotenv").config();
const jwt = require("jsonwebtoken");

const createAccessToken=(payload)=>
{
   try {
    let accessToken = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN_SECRET, 
        {
          expiresIn: "10m",
        });
        return accessToken;
   } catch (error) {
    console.log(error);
   }
};

const createRefreshToken=(payload)=>
{
    try {
        let refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_TOKEN_SECRET, 
            {
            expiresIn: "6h",
          });
            return refreshToken;
    } catch (error) {
        console.log(error);
    }
    
}

module.exports={
    createAccessToken,
    createRefreshToken
}
