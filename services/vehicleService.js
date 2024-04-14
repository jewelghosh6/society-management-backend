const Vehicles = require("../db/models/vehicles");
const VehicleTypes = require("../db/models/vehicleTypes");
const Visitors = require("../db/models/visitors");


const createVehicleEntry = async (vehicleData) => {
  let resArr;
  try {
    let res = await Vehicles.create(vehicleData);
    //console.log(res);
    resArr = [201, "Vehicle entry successfully created"];
  } catch (error) {
    console.log(error);
    resArr = [400, "Vehicle entry can not be created"];
  }
  return resArr;
};

const showAllVehicles = async () => {
  let vehiclesObj;
  try {
    vehiclesObj = await Vehicles.findAll({
      attributes: ["id", "registrationNumber", "clockIn", "clockOut"],
      include: [
        {
          model: VehicleTypes,
          attributes: ["vehicleTypeName"],
        },
        {
          model: Visitors,
          attributes: ["id", "firstName", "lastName", "mobileNumber"],
        },
      ],
    });
    //console.log(vehiclesObj);
  } catch (error) {
    console.log(error);
  }
  return vehiclesObj;
};

const clockOutForVehicle = async (visitorId) => {
  try {
    await Vehicles.update({ clockOut: new Date() }, {
      where: {
        visitorId: visitorId
      }
    });
  } catch (error) {
    console.log(error);
  }
}





module.exports = {
  createVehicleEntry,
  showAllVehicles,
  clockOutForVehicle
};
