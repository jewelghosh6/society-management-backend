const { authenticateUser } = require("../services/authentication/authUser");
const { verifyRefreshTokenAndGetAccessToken ,
  verifyRefreshTokenAndDeleteFromRedis }=require('../services/authentication/verifyToken');

const login = async (req, res) => {
  const emailId = req.body.emailId;
  const password = req.body.password;
  try {
    if (emailId == null || password == null) res.status(400).send("Give valid emailId & password");

    let authRes = await authenticateUser(emailId, password);
    //console.log(authRes);
    if(authRes[0] === 200) res.json({ accessToken: authRes[1],refreshToken:authRes[2] });
    else res.status(authRes[0]).send({message:authRes[1]});
  } 
  catch (error) 
  {
    res.status(401).send({message:'wrong emailId or password',error:error});
    console.log(error);
  }
};

const generateAccessToken= async (req,res)=>
{
  let refreshToken=req.body.refreshToken;
  if(!refreshToken) res.status(401).send('Refersh token must be provided');
  else {
  const resArr= await verifyRefreshTokenAndGetAccessToken(refreshToken);

  console.log('in authController'+resArr);
  if(resArr[0] ==  200) res.send({accessToken:resArr[1]});
   else res.status(resArr[0]).send(resArr[1]);
  }
}

const logout= async (req,res)=>
{
  let refreshToken=req.headers["authorization"];//req.body.refreshToken;
  console.log("In auth controller refreshToken: "+refreshToken);

  if(!refreshToken) res.status(401).send('Give valid refersh token');
  
  let resArr=await verifyRefreshTokenAndDeleteFromRedis(refreshToken);

  res.status(resArr[0]).send(resArr[1]);

}

module.exports = {
  login,
  generateAccessToken,
  logout
};
