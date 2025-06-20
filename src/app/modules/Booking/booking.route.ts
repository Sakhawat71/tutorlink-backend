import { Router } from "express";
import { BookingController } from "./booking.controller";

const router = Router();

router.get(
    "/",
    BookingController.getAllBookings
);

// router.get(
//     "/:id",
//     BookingController.getBookingById
// );

router.post(
    "/",
    BookingController.createBooking
);

router.patch(
    "/:id/status",
    BookingController.updateStatus
);

router.delete(
    "/:id",
    BookingController.deleteBooking
);

export const bookingRoute = router;
