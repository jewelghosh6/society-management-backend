
const { generateParkingBillAndCreateOrder, updateParkingFee }=require('../services/parkingFeeService');

const generateParkingBill=async (req,res)=>{
    let visitorId=req.params['visitorId'];
   let resArr= await generateParkingBillAndCreateOrder(visitorId);
   if(resArr[0] ==200) res.send(resArr[1]);
   else res.status(resArr[0]).send(resArr[1]);
}

const updateParkingFeeOnSuccessfulPayment= async(req,res)=>{
    let vehicleId=req.params['vehicleId'];
    let dataToUpdate={
        paymentId:req.body.paymentId,
        isPaid:true
    };

   let resArr= await updateParkingFee(vehicleId,dataToUpdate);
   
   if(resArr[0]==200) res.send({message:resArr[1]});
   else res.status(resArr[0]).send(resArr[1]);
}

module.exports={
    generateParkingBill,
    updateParkingFeeOnSuccessfulPayment
}