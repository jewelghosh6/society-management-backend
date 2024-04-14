//const { setClockOutTimeForVisitorAndVehicle } = require("./visitorService");
const razorPayInstance = require("../utils/razorPayInstance");
const Vehicles = require("../db/models/vehicles");
const ParkingFee = require("../db/models/parkingFee");

const calculateTimeParkedAndAmount = async (visitorId) => {
  try {
    let vehicleObj = await Vehicles.findOne({
      where: {
        visitorId: visitorId,
      },
    });

    if (!vehicleObj.clockOut) return [0, "Not clocked out yet,Please clockout first then Pay"];

    let timeParked = (vehicleObj.clockOut - vehicleObj.clockIn) / 60000; //in Minutes
    console.log("timeParked: " + timeParked);

    let billAmount;
    if (timeParked <= 30) return [25, timeParked, vehicleObj.id];
    else {
      billAmount = 25 + (timeParked - 30) * 0.25;
      return [billAmount, timeParked, vehicleObj.id];
    }
  } catch (error) {
    console.log(error);
  }
};

const createEntryForParkingFee = async (parkingFeeObj) => {
  try {
    let res = await ParkingFee.create(parkingFeeObj);
  } catch (error) {
    console.log("Error creating ParkingFee " + error);
  }
};

const generateParkingBillAndCreateOrder = async (visitorId) => {
  try {
    // let resp = await setClockOutTimeForVisitorAndVehicle(visitorId);

    // console.log("response from set clockout: "+resp);


    let response = await calculateTimeParkedAndAmount(visitorId);

    if (response[0] === 0) return [400, response[1]];

    let billAmount = response[0];
    let timeParked = response[1];
    let vehicleId = response[2];

    let prkFeeObj = await ParkingFee.findOne({
      where: {
        vehicleId: vehicleId
      }
    });

    if (prkFeeObj && prkFeeObj.isPaid) {
      return [400, 'Already paid the Bill'];
    }
    else if (prkFeeObj && !prkFeeObj.isPaid) {
      return [200, { orderId: prkFeeObj.orderId, amount: prkFeeObj.amount }];
    }

    let amountWithOutDec = Math.trunc(billAmount);  // Math.trunc() is used to remove the decimal part of the number

    console.log("Bill Amount: " + billAmount);

    let options = {
      amount: amountWithOutDec * 100,
      currency: "INR",
      receipt: "receipt#1",
    };

    //let orderId;
    let order = await razorPayInstance.orders.create(options);
    //     (err, order) => {
    //   if (err) console.log(err);
    //   else {
    //     console.log("within razorpay ins method");
    //     console.log(order);
    //     orderId=order.id;
    //   }
    // });
    console.log(order);

    let parkingFeeObj = {
      timeParked: new Date(Math.trunc(timeParked) * 60 * 1000)
        .toISOString()
        .substr(11, 8),
      amount: amountWithOutDec,
      orderId: order.id,
      isPaid: false,
      vehicleId: vehicleId,
    };

    console.log("..........");
    console.log(parkingFeeObj);

    let resFromCreateParkingFee = await createEntryForParkingFee(parkingFeeObj);

    let orderDetails = {
      orderId: order.id,
      amount: Number(amountWithOutDec),
      //name: req.body.name,
      //emailId:
      //mobile: req.body.mobile,
    };
    return [201, orderDetails];
  } catch (error) {
    console.log(error);
    return [400, error];
  }
};

const updateParkingFee = async (vehicleId, dataToUpdate) => {
  let resArr;
  try {
    let res = await ParkingFee.update(dataToUpdate, {
      where: {
        vehicleId: vehicleId
      }
    })
    if (res == 1) resArr = [200, 'Payment data updated successfully'];
    else resArr = [400, 'Can not update payment details'];
  } catch (error) {
    resArr = [400, 'Can not update payment details Reason: ' + error];
  }
  return resArr;
}

//clockOutAndGenerateParkingBill(56);
//calculateTimeParkedAndAmount(76);

module.exports = {
  generateParkingBillAndCreateOrder,
  calculateTimeParkedAndAmount,
  createEntryForParkingFee,
  updateParkingFee
};
