import { Types } from "mongoose";

export interface ITime {
    day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
    startTime: string; // e.g., "10:00"
    endTime: string;   // e.g., "12:00"
};

export interface IBooking {
    id: string;
    student: Types.ObjectId | string;
    tutor: Types.ObjectId | string;
    subject: Types.ObjectId | string;
    status: "pending" | "accepted" | "paid" | "completed" | "canceled";
    price: number;
    time: ITime;
};