const { createVisitorEntry, setClockOutTimeForVisitorAndVehicle, showVisitors, deleteVisitorEntry }=require('../services/visitorService');
const { addVehicle }=require('./vehicleController');


const addVisitorAndVehicle=async (req,res)=>
{
    let visitorInfo=
    {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        mobileNumber: req.body.mobileNumber,
        haveVehicle: req.body.haveVehicle,
        clockIn: new Date(),
        createdBy: req.body.createdBy,
        flatId: req.body.flatId
    };
    try {
        let resArr= await createVisitorEntry(visitorInfo);
        let visitorId=resArr[2];
        let resAddVehicle=[];
        if(visitorInfo.haveVehicle)
        {
           resAddVehicle= await addVehicle(req,res,visitorId);
           //console.log("......resFromAddVehicle:"+resAddVehicle);
        }
        //console.log(resArr);
        res.status(resArr[0]).json({message:[resArr[1],resAddVehicle[1]]});
     } catch (error) {
         res.send(error);
     }
};

const setClockOut=async (req,res)=>
{
    let visitorId=req.params['id'];
    try {
        let response= await setClockOutTimeForVisitorAndVehicle(visitorId);
        res.status(response[0]).send({message:response[1]});
    } catch (error) {
        res.send(error);
    }
};

const viewVisitors= async (req,res)=>
{
    try {
       let visitorsObj= await showVisitors();
       res.send(visitorsObj)
    } catch (error) {
        res.send(error);
    }
}

const deleteVisitor=async (req,res)=>
{
    let visitorId=req.params['id'];
    try {
      let response= await deleteVisitorEntry(visitorId);
      if (response) {
        res.send('Visitor Entry deleted successfully');
      } else {
        res.send('Can not delete Visitor Entry as Visitor Id is not valid');
      }
    } catch (error) {
        res.send(error);
    }
}

module.exports=
{
    addVisitorAndVehicle,
    setClockOut,
    viewVisitors,
    deleteVisitor
}