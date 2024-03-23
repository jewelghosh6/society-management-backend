const UserRoles=require('./models/user-roles');
const VehicleTypes=require('./models/vehicle-types');

const User=require('./models/users');

const sequelizeObj=require('./utils/db');
const {Sequelize}=require('sequelize');
const server=require('./server');

const Visitors=require('./models/visitors');
const Vehicles=require('./models/vehicles');
const ParkingFee=require('./models/parking-fee');

const {findUserByKeyword}=require('./services/userService');


// (async () => {
// let resp=await Vehicles.update({vehicleTypeId:2}, {
//     where:{
//         id:1
//     }})})();


// (async () => {
//  await ParkingFee.sync({ force: true });
//   })();

// Vehicles.sync({ force: true }).then(() => console.log('db synced'))
//   .catch(() => {
//     console.log('error syncing db');
//   });

// Vehicles.sync({alter:true})
// .then(res=>console.log(res))
// .catch(err=>console.log(err));

// const getAllUserRoles=async ()=>
// {
//     const allUserRoles=await UserRoles.findAll({
//         attribute:'roleTypes'
//     });
// }

// UserRoles.findAll({
//     attribute:'roleTypes'
// }).then(res=> {
//     res.forEach(element => {
//         console.log(element.roleTypes);
//     });
// })
// .catch(err=> console.log(err));

// server.post('/addVehicleType',async (req,res)=>
// {
//     console.log(req.body);
//     let resp=await VehicleTypes.create(req.body);
//     res.send(resp);
// })