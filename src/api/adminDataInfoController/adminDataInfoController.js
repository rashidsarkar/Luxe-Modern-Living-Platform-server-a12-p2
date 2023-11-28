// Import your models appropriately

const apartment = require("../../models/ApartmentRooms");
const Apartment = require("../../models/apartmentsSM");
const getUserRoleSM = require("../../models/getUserRoleSM");

const getDataInfo = async (req, res) => {
  try {
    // Total rooms
    const totalRooms = await apartment.countDocuments({});

    // Total users
    const totalUsers = await getUserRoleSM.countDocuments({ role: "user" });
    const totalMember = await getUserRoleSM.countDocuments({
      role: "member",
    });

    // Total booked rooms
    const bookedRooms = await Apartment.countDocuments({
      isBooked: true,
    });

    // Calculate percentage of booked rooms
    const percentBooked = ((bookedRooms / totalRooms) * 100).toFixed(2);

    // Calculate percentage of available rooms
    const percentavailable = 100 - percentBooked;

    res.send({
      totalRooms,
      totalUsers,
      totalMember,
      bookedRooms,
      percentBooked,
      percentavailable,
    });
  } catch (error) {
    console.error("Error fetching Data Info:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = getDataInfo;
