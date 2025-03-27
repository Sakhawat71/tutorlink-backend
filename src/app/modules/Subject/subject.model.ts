import { model, Schema, Document } from "mongoose";
import { IAvailability, ITutorSubject } from "./subject.interface";

const AvailabilitySchema = new Schema<IAvailability>({
    day: {
        type: String,
        enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        required: [true, "Day is required"],
    },
    startTime: {
        type: String,
        required: [true, "Start time is required"],
        match: [/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Start time must be in HH:MM format"],
    },
    endTime: {
        type: String,
        required: [true, "End time is required"],
        match: [/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "End time must be in HH:MM format"],
    },
});

const TutorSubjectSchema = new Schema<ITutorSubject>(
    {
        tutorId: {
            type: String,
            required: [true, "Tutor ID is required"],
            index: true, // Index for faster queries by tutorId
        },
        description: {
            type: String,
            required: [true, "Description is required"],
            minlength: [10, "Description must be at least 10 characters"],
            maxlength: [500, "Description must be under 500 characters"],
        },
        subject: {
            type: String,
            required: [true, "Subject is required"],
        },
        hourlyRate: {
            type: Number,
            required: [true, "Hourly rate is required"],
            min: [5, "Hourly rate must be at least $5"],
            max: [100, "Hourly rate must be under $100"],
        },
        location: {
            type: String,
            enum: ["Online", "In-Person"],
            required: [true, "Location type is required"],
        },
        availability: {
            type: [AvailabilitySchema],
            required: [true, "Availability is required"],
            validate: {
                validator: (val: IAvailability[]) => val.length > 0,
                message: "At least one availability slot is required",
            },
        }
    },
    {
        timestamps: true, // Adds createdAt and updatedAt automatically
    }
);

// Pre-save hook (optional): Add custom logic if needed (e.g., validation)
TutorSubjectSchema.pre("save", async function (next) {
    const subject = this as ITutorSubject & Document;
    // Example: Ensure no duplicate subject for the same tutor (optional)
    const existing = await TutorSubjectModel.findOne({
        tutorId: subject.tutorId,
        subject: subject.subject,
    });
    if (existing) {
        throw new Error("This subject is already posted by the tutor");
    }
    next();
});

// Post-save hook: Sanitize response (optional, e.g., remove sensitive fields)
TutorSubjectSchema.post("save", function (doc, next) {
    // No sensitive fields to remove here, but keeping structure consistent
    next();
});

export const TutorSubjectModel = model<ITutorSubject>("TutorSubject", TutorSubjectSchema);