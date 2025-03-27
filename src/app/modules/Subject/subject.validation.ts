import * as z from "zod";

export const tutorSubjectSchema = z.object({
    description: z.string().min(10, "Description must be at least 10 characters").max(500, "Description must be under 500 characters"),
    subject: z.string().min(1, "Subject cannot be empty"),
    hourlyRate: z.number().min(5, "Hourly rate must be at least $5").max(100, "Hourly rate must be under $100"),
    location: z.enum(["Online", "In-Person"], { required_error: "Location type is required" }),
    availability: z.array(
        z.object({
            day: z.enum(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]),
            startTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid start time format (HH:MM)"),
            endTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid end time format (HH:MM)"),
        }).refine(
            (data) => data.startTime < data.endTime,
            { message: "End time must be after start time", path: ["endTime"] }
        )
    ).min(1, "At least one availability slot is required"),
});

export type TutorSubjectInput = z.infer<typeof tutorSubjectSchema>;