import { z } from "zod";

const createUserValidation = z.object({
    body: z.object({
        name: z.string({ required_error: "Name is required" }),

        email: z.string(
            { required_error: "Email is required" }
        ).email("Invalid email format"),

        password: z.string({ required_error: "Password is required" }),

        role: z.enum(
            ["admin", "student", "tutor"],
            { required_error: "Role is required" }
        ).default("student"),

        isBlocked: z.boolean(
            { required_error: "isBlocked is required" }
        ).default(false),

        available: z.boolean().optional().default(true),
    }),
});

const updateUserValidation = z.object({
    body: z.object({
        name: z.string().optional(),
        email: z.string().email("Invalid email format").optional(),
        password: z.string().optional(),
        role: z.enum(["admin", "user"]).optional(),
        isBlocked: z.boolean().optional(),
        available: z.boolean().optional().default(true),
    }),
});

export const userValidation = {
    createUserValidation,
    updateUserValidation
}