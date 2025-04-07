import { BookingModel } from "./booking.model";
import { IBooking } from "./booking.interface";

export const BookingService = {
    createBooking: async (payload: IBooking) => {
        const booking = await BookingModel.create(payload);
        return booking;
    },

    getAllBookings: async () => {
        const bookings = await BookingModel.find()
            .populate("student", "-password")
            .populate("tutor", "-password")
            .populate("subject");
        return bookings;
    },

    getBookingById: async (id: string) => {
        const booking = await BookingModel.findById(id)
            .populate("student", "-password")
            .populate("tutor", "-password")
            .populate("subject");
        return booking;
    },

    updateBookingStatus: async (id: string, status: IBooking["status"]) => {
        const updated = await BookingModel.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );
        return updated;
    },

    deleteBooking: async (id: string) => {
        return await BookingModel.findByIdAndDelete(id);
    },
};
