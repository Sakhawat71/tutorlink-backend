import { Request, Response } from "express";
import { BookingService } from "./booking.service";
import { createBookingZodSchema } from "./booking.validation";
import sendResponse from "../../utils/sendResponce";
import { StatusCodes } from "http-status-codes";


const createBooking = async (req: Request, res: Response) => {
    try {
        const validated = createBookingZodSchema.parse(req.body);
        const bookingData = {
            ...validated,
            status: validated.status ?? "pending"
        };
        const booking = await BookingService.createBooking(bookingData);
        res.status(201).json({
            success: true,
            data: booking
        });
    } catch (err: any) {
        res.status(400).json({ success: false, message: err.message });
    }
};

const getAllBookings = async (req: Request, res: Response) => {
    try {
        const bookings = await BookingService.getAllBookings();
        res.status(200).json({
            success: true,
            data: bookings
        });
    } catch (err: any) {
        res.status(500).json({ success: false, message: err.message });
    }
};

const getBookingById = async (req: Request, res: Response) => {
    const bookingId = req.params.id;
    // try {
    const booking = await BookingService.getBookingById(bookingId);
    if (!booking) {
        return res.status(404).json({
            success: false,
            message: "Booking not found"
        });
    }
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Booking retrieved successfully",
        data: booking,
    })
    // } catch (err: any) {
    //     res.status(500).json({
    //         success: false,
    //         message: err.message
    //     });
    // }
};

const updateStatus = async (req: Request, res: Response) => {
    try {
        const { status } = req.body;
        const updated = await BookingService.updateBookingStatus(req.params.id, status);
        res.status(200).json({ success: true, data: updated });
    } catch (err: any) {
        res.status(400).json({ success: false, message: err.message });
    }
};

const deleteBooking = async (req: Request, res: Response) => {
    try {
        await BookingService.deleteBooking(req.params.id);
        res.status(200).json({ success: true, message: "Booking deleted" });
    } catch (err: any) {
        res.status(500).json({ success: false, message: err.message });
    }
};

export const BookingController = {
    createBooking,
    getAllBookings,
    getBookingById,
    updateStatus,
    deleteBooking
};