const express = require("express");
const Apartment = require("../../models/ApartmentRooms");
const getApartmentRooms = require("../../api/appartmentRooms/controllers/getApartmentRooms");
const router = express.Router();

router.get("/api/apartmentRooms", getApartmentRooms);

module.exports = router;
