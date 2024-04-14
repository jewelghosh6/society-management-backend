const Flats = require("../db/models/flats");
const Users = require("../db/models/users");

const createFlat = async (flatData) => {
  await Flats.create(flatData);
};

const viewFlats = async () => {
  const flatsObj = await Flats.findAll({
    attributes: [
      "id",
      "flatNumber",
      "buildingNumber",
      "flatArea",
      "totalRooms",
      "parkingSpaceAlloted",
    ],
    include: [
      {
        model: Users, // will create a left join
        attributes: ["firstName", "lastName"],
      },
    ],
  });
  return flatsObj;
};

const updateFlat = async (faltId, dataToUpdate) => {
  await Flats.update(dataToUpdate, {
    where: {
      id: faltId,
    },
  });
};

const deleteFlat= async (faltId) =>
{
    await Flats.destroy({
        where:{
            id: faltId
        }
    })
};

module.exports = {
  createFlat,
  viewFlats,
  updateFlat,
  deleteFlat
};
