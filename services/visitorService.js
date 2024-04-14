const Visitors = require("../db/models/visitors");
const Flats = require("../db/models/flats");
const { clockOutForVehicle } = require("./vehicleService");

const createVisitorEntry = async (visitorInfo) => {
  let resArr;
  try {
    let visitorObj = await Visitors.create(visitorInfo);

    resArr = [
      201,
      `New Visitor Entry created with Id: ${visitorObj.id} `,
      visitorObj.id,
    ];
  } catch (error) {
    resArr = [400, error];
  }
  return resArr;
};

const setClockOutTimeForVisitorAndVehicle = async (visitorId) => {
  let resArr;
  try {
    let visitorObj = await Visitors.findByPk(visitorId);
    console.log(visitorObj);
    if (visitorObj === null) {
      resArr = [400, `No vitor found with the Id: ${visitorId}`];
    } else if (visitorObj.clockOut !== null) {
      resArr = [400, `Visitor already clocked out`];
    } else {
      await Visitors.update(
        { clockOut: new Date() },
        {
          where: {
            id: visitorId,
          },
        }
      );
      let resMsg = "Visitor Clocked out,";
      if (visitorObj.haveVehicle) {
        await clockOutForVehicle(visitorId);
        resMsg = resMsg + " Vehicle Clocked out";
      }
      resArr = [200, resMsg];
    }
  } catch (error) {
    console.log(error);
  }
  return resArr;
};


const showVisitors = async () => {
  let visitorsObj;
  try {
    visitorsObj = await Visitors.findAll({
      attributes: [
        "id",
        "firstName",
        "lastName",
        "mobileNumber",
        "haveVehicle",
        "clockIn",
        "clockOut",
        "createdBy",
      ],
      include: {
        model: Flats,
        attributes: ["flatNumber"],
      },
    });
  } catch (error) {
    console.log(error);
  }
  return visitorsObj;
};


const deleteVisitorEntry = async (visitorId) => {
  let resp;
  try {
    resp = await Visitors.destroy({
      where: {
        id: visitorId,
      },
      //returning: true
    });
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createVisitorEntry,
  setClockOutTimeForVisitorAndVehicle,
  showVisitors,
  deleteVisitorEntry,
};
