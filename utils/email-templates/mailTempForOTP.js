const generateMailTemplte = (societyInfo, otp) => {
  // console.log("societyInfo", societyInfo);
  //     return `
  //     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
  //       <div style="text-align: center; margin-bottom: 20px;">
  //         <img src="${societyInfo.logoUrl}" alt="Society Logo" style="width: 100px;">
  //       </div>
  //       <h2 style="color: #333;">Your One-Time Password (OTP)</h2>
  //       <p>Hello,</p>
  //       <p>Your OTP for accessing your account is:</p>
  //       <div style="font-size: 24px; font-weight: bold; background: #f4f4f4; padding: 10px; text-align: center; border-radius: 5px; margin: 20px 0;">
  //         ${otp}
  //       </div>
  //       <p>This OTP is valid for 10 minutes.</p>
  //       <p>If you did not request this OTP, please ignore this email.</p>
  //       <br>
  //       <p>Best regards,</p>
  //       <p><strong>${societyInfo.name}</strong></p>
  //       <p>
  //         <a href="mailto:${societyInfo.contactEmail}">${societyInfo.contactEmail}</a><br>
  //         <a href="tel:${societyInfo.contactPhone}">${societyInfo.contactPhone}</a><br>
  //         ${societyInfo.address}
  //       </p>
  //     </div>
  //   `;

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #dcdcdc; border-radius: 10px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
      <div style="background-color: #f05a76 ; color: white; padding: 20px; text-align: center;">
        <h1>${societyInfo.societyName}</h1>
        <p>${societyInfo.soceityAddress}</p>
      </div>
      <div style="padding: 20px;">
        <h2>Your One-Time Password (OTP)</h2>
        <p>Hello,</p>
        <p>Your OTP for accessing your account is:</p>
        <div style="font-size: 24px; font-weight: bold; color: #4CAF50; text-align: center; margin: 20px 0;">
          ${otp}
        </div>
        <p>This OTP is valid for 10 minutes.</p>
        <p>If you did not request this OTP, please ignore this email.</p>
        <br>
        <p>Best regards,</p>
        <p>${societyInfo.societyName} Team</p>
      </div>
      <div style="background-color: #f8f8f8; color: #888888; padding: 10px; text-align: center; border-top: 1px solid #dcdcdc;">
        <p>&copy; ${new Date().getFullYear()} ${societyInfo.societyName}. All rights reserved.</p>
      </div>
    </div>
  `;
}



module.exports = generateMailTemplte;