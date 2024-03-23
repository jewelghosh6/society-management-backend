const express=require('express');

const { viewAllVehicles }=require('../controllers/vehicleController');
const {generateParkingBill , updateParkingFeeOnSuccessfulPayment}=require('../controllers/parkingFeeController');
const router=express.Router();

// router.post('/add',(req,res)=>
// {
//     addVehicle(req,res);
// })

router.get('/viewAll',viewAllVehicles);

router.post('/generateParkingBill/:visitorId',(req,res)=>{
    generateParkingBill(req,res);
})

router.post('/postPaymentSuccess/:vehicleId',(req,res)=>{
    updateParkingFeeOnSuccessfulPayment(req,res);
})

module.exports=router