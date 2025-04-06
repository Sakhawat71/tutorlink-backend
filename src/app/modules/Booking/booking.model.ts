import { Schema, model } from "mongoose";
import { IBooking } from "./booking.interface";

const bookingSchema = new Schema<IBooking>(
    {
        student: { type: Schema.Types.ObjectId, ref: "User", required: true },
        tutor: { type: Schema.Types.ObjectId, ref: "User", required: true },
        subject: { type: Schema.Types.ObjectId, ref: "TutorSubject", required: true },
        status: {
            type: String,
            enum: ["pending", "accepted", "paid", "completed", "canceled"],
            default: "pending",
        },
        price: { type: Number, required: true },
        time: {
            day: {
                type: String,
                enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                required: true,
            },
            startTime: { type: String, required: true },
            endTime: { type: String, required: true },
        },
    },
    {
        timestamps: true,
    }
);

export const BookingModel = model<IBooking>("Booking", bookingSchema);
