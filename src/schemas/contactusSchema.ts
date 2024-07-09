import { z } from "zod";

export const usenameValidation = z
  .string()
  .min(3, { message: "username must be atleast 3 characters!" })
  .max(20, { message: "username must be less than 20 characters!" })
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special characters!");

export const contactSchema = z.object({
  username: usenameValidation,
  email: z.string().email({ message: "Invalid email address!" }),
  message: z
    .string()
    .min(10, { message: "username must be atleast 10 characters!" })
    .max(300, { message: "username must be less than 300 characters!" }),
});
