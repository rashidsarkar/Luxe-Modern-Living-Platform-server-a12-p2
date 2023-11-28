const apartment = require("../../../models/ApartmentRooms");

const getApartmentRooms = async (req, res) => {
  try {
    const page = Number(req.query?.page);
    const limit = Number(req.query?.limit);
    const skip = (page - 1) * limit;
    const sortObj = {};
    const filter = {};
    const result = await apartment.find(filter).skip(skip).limit(limit);

    const count = await apartment.countDocuments(filter);
    res.send({ result, count });

    const datainfo = req.body;

    // const result = await apartment.find();
    // res.send({ result });
  } catch (error) {
    console.error("Error fetching rooms:", error);
    res.status(500).send("Internal Server Error");
  }
};
module.exports = getApartmentRooms;
