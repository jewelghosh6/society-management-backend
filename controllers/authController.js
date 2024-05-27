const { authenticateUser } = require("../services/authentication/authUser");
const { verifyRefreshTokenAndGetAccessToken,
  verifyRefreshTokenAndDeleteFromRedis } = require('../services/authentication/verifyToken');

const login = async (req, res) => {
  const emailId = req.body.email;
  const password = req.body.password;
  try {
    if (emailId == null || password == null) res.status(400).send("Give valid emailId & password");

    let authRes = await authenticateUser(emailId, password);
    //console.log(authRes);

    if (authRes[0] === 200) {
      const cookieOptions = {
        httpOnly: true,
        secure: false, // Set to true for HTTPS in production
        maxAge: 1000 * 60 * 60 * 24, // Expires in 24 hours
      };

      res.cookie("access-token", authRes[1], cookieOptions);
      res.cookie("refresh-token", authRes[2], cookieOptions);
      res.json({
        success: true,
        message: "Welcome back,Login Successful !!!",
        accessToken: authRes[1],
        refreshToken: authRes[2],
        userData: authRes[3],
        accessTokenExpireAt: new Date(Date.now() + 3 * 60 * 1000)
      });
    }
    else res.status(authRes[0]).send({ success: false, message: authRes[1] });
  }
  catch (error) {
    res.status(401).send({ success: false, message: 'wrong emailId or password', error: error });
    console.log(error);
  }
};

const generateAccessToken = async (req, res) => {
  let refreshToken = req.body.refreshToken;
  if (!refreshToken) res.status(401).send('Refersh token must be provided');
  else {
    const resArr = await verifyRefreshTokenAndGetAccessToken(refreshToken);

    // console.log('in authController' + resArr);
    if (resArr[0] == 200) res.send({ accessToken: resArr[1] });
    else res.status(resArr[0]).send(resArr[1]);
  }
}

const signOut = async (req, res) => {
  let refreshToken = req.body.refreshToken;
  // console.log("In auth controller refreshToken: " + refreshToken);

  if (!refreshToken) res.status(401).send('Give valid refersh token');

  let resArr = await verifyRefreshTokenAndDeleteFromRedis(refreshToken);

  res.status(resArr[0]).send(resArr[1]);

}

module.exports = {
  login,
  generateAccessToken,
  signOut
};
