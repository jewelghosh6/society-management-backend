const Flats = require("../db/models/flats");
const Users = require("../db/models/users");

const createFlat = async (flatData) => {
  try {
    let res = await Flats.create(flatData);
    console.log("Flats.create", res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const getAllFlatDetails = async () => {
  try {
    const flatsObj = await Flats.findAll({
      attributes: [
        "id",
        "flat_number",
        "building_number",
        "floor_number",
        "flat_area",
        "total_rooms",
        "parking_space_alloted",
        "user_id"
      ],
      include: [
        {
          model: Users, // will create a left join
          attributes: ["first_name", "last_name"],
        },
      ],
    });
    return flatsObj;
  } catch (error) {
    console.log(error);
  }

};

const updateFlat = async (flat_id, dataToUpdate) => {
  try {
    let resFromUpdate = await Flats.update(dataToUpdate, {
      where: {
        id: flat_id,
      },
    });
    // console.log("resFromUpdate", resFromUpdate == 1);
    return resFromUpdate == 1 ? [200, "Flat details updated successfully"] : [200, "No Flat details updated"]
  } catch (error) {
    console.error("Error in updateFlat method: ", error);
    return [400, "Error updating flat details", error]
  }

};

const deleteFlat = async (flat_id) => {
  await Flats.destroy({
    where: {
      id: flat_id
    }
  })
};

module.exports = {
  createFlat,
  getAllFlatDetails,
  updateFlat,
  deleteFlat
};
