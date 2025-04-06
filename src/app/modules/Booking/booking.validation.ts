import { z } from "zod";
import { Types } from "mongoose";

export const createBookingZodSchema = z.object({
    student: z.string().refine((val) => Types.ObjectId.isValid(val), {
        message: "Invalid student ID",
    }),
    tutor: z.string().refine((val) => Types.ObjectId.isValid(val), {
        message: "Invalid tutor ID",
    }),
    subject: z.string().refine((val) => Types.ObjectId.isValid(val), {
        message: "Invalid subject ID",
    }),
    status: z.enum(["pending", "accepted", "paid", "completed", "canceled"]).optional(),
    price: z.number().min(0, "Price must be a positive number"),
    time: z.object({
        day: z.enum(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]),
        startTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
            message: "Invalid start time format (HH:mm)",
        }),
        endTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
            message: "Invalid end time format (HH:mm)",
        }),
    }),
});
