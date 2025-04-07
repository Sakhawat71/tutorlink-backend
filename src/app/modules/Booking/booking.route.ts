import express from "express";
import { BookingController } from "./booking.controller";

const router = express.Router();

router.post("/", BookingController.createBooking);
router.get("/", BookingController.getAllBookings);
router.get("/:id", BookingController.getBookingById);
router.patch("/:id/status", BookingController.updateStatus);
router.delete("/:id", BookingController.deleteBooking);

export const bookingRoute = router;
