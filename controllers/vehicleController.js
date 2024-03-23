const { createVehicleEntry, showAllVehicles }=require('../services/vehicleService');


const addVehicle=async (req,res,visitorId)=>
{
    const vehicleData=
    {
        registrationNumber: req.body.registrationNumber,
        clockIn: new Date(),
        visitorId: visitorId,
        typesId: req.body.typesId
    }
   let response=await createVehicleEntry(vehicleData);
   //res.status(response[0]).send({message:response[1]});
   return response;
}

const viewAllVehicles=async (req,res)=>
{
    let listOfVehicles=await showAllVehicles();
    res.send(listOfVehicles);
}

module.exports=
{
    addVehicle,
    viewAllVehicles
}