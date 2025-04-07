import { Request, Response } from "express";
import { BookingService } from "./booking.service";
import { createBookingZodSchema } from "./booking.validation";

export const BookingController = {
    createBooking: async (req: Request, res: Response) => {
        try {
            const validated = createBookingZodSchema.parse(req.body);
            const booking = await BookingService.createBooking(validated);
            res.status(201).json({ success: true, data: booking });
        } catch (err: any) {
            res.status(400).json({ success: false, message: err.message });
        }
    },

    getAllBookings: async (req: Request, res: Response) => {
        try {
            const bookings = await BookingService.getAllBookings();
            res.status(200).json({ success: true, data: bookings });
        } catch (err: any) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    getBookingById: async (req: Request, res: Response) => {
        try {
            const booking = await BookingService.getBookingById(req.params.id);
            if (!booking) {
                return res.status(404).json({ success: false, message: "Booking not found" });
            }
            res.status(200).json({ success: true, data: booking });
        } catch (err: any) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    updateStatus: async (req: Request, res: Response) => {
        try {
            const { status } = req.body;
            const updated = await BookingService.updateBookingStatus(req.params.id, status);
            res.status(200).json({ success: true, data: updated });
        } catch (err: any) {
            res.status(400).json({ success: false, message: err.message });
        }
    },

    deleteBooking: async (req: Request, res: Response) => {
        try {
            await BookingService.deleteBooking(req.params.id);
            res.status(200).json({ success: true, message: "Booking deleted" });
        } catch (err: any) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
};
