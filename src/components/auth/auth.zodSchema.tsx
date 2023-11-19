import * as z from "zod";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
const phoneRegex = /^\d{10}$/; // Assuming a 10-digit phone number
const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters",
    }),
    phoneNumber: z.string().refine((value) => phoneRegex.test(value), {
        message: "Invalid phone number",
    }),
    email: z.string().refine((value) => emailRegex.test(value), {
        message: "Invalid email address",
    }),
    password: z.string().refine((value) => passwordRegex.test(value), {
        message:
            "Password must be 5+ characters, lowercase, uppercase, digit and special character",
    }),
});

export const authZodSchema = {
    formSchema,
};
