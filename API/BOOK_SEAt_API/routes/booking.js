const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  getBookings,
  getBooking,
  createBooking,
  updateBooking,
  deleteBooking,
} = require("../controllers/booking");

router.route("/").get(getBookings).post(createBooking);
router.route("/:id").get(getBooking).put(updateBooking).delete(deleteBooking);

module.exports = router;
