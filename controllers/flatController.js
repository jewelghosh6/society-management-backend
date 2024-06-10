const { createFlat, updateFlat, deleteFlat, getAllFlatDetails } = require("../services/flatService");

const addFlat = async (req, res) => {
  let flatData = req.body;
  try {
    let resFromCreateFlat = await createFlat(flatData);
    res.send({ success: true, message: 'Flat created', data: resFromCreateFlat });
  } catch (error) {
    res.status(400).send({ success: false, message: error });
  }
};

const showFlats = async (req, res) => {
  try {
    const flatsdata = await getAllFlatDetails();
    res.status(200).send({ success: true, data: flatsdata });
    return;
  } catch (error) {
    res.status(400).send({ success: false, message: "error", error: error });
    return;
  }

};

const modifyFlatData = async (req, res) => {
  const flatId = req.params['id'];
  const dataToUpdate = req.body;
  try {
    let resp = await updateFlat(flatId, dataToUpdate);
    res.status(resp[0]).send({
      success: resp[0] === 200,
      message: resp[1],
      ...(resp[0] === 400 && { error: resp[2] })
    });
    return;
    // res.send('Flat details updated successfully');
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Error updaing flat details",
      error: error
    });
  }
}

const deleteFlatById = async (req, res) => {
  const flatId = req.params['id'];
  try {
    await deleteFlat(flatId);
    res.send(`Flat with Id ${flatId} deleted`);
  } catch (error) {
    res.send('Can not delete the flat' + error);
  }
};

module.exports = {
  addFlat,
  showFlats,
  modifyFlatData,
  deleteFlatById
};
