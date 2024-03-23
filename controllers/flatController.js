const { createFlat, viewFlats, updateFlat, deleteFlat } = require("../services/flatService");

const addFlat = async (req, res) => {
  let userData = req.body;
  try {
    await createFlat(userData);
    res.send('Flat created');
  } catch (error) 
  {
    res.send(err);
  }
};

const showFlats = async (req, res) => {
  const flatsdata = await viewFlats();
  res.send(flatsdata);
};

const modifyFlatData= async (req,res) =>
{
    const flatId=req.params['id'];
    const dataToUpdate=req.body;
    try {
        await updateFlat(flatId,dataToUpdate);
        res.send('Flat details updated successfully');
    } catch (error) {
        res.send('error caught');        
    }
}

const deleteFlatById= async(req,res)=>
{
    const flatId=req.params['id'];
    try {
        await deleteFlat(flatId);
        res.send(`Flat with Id ${flatId} deleted`);
    } catch (error) {
        res.send('Can not delete the flat'+error);
    }
};

module.exports = {
  addFlat,
  showFlats,
  modifyFlatData,
  deleteFlatById
};
