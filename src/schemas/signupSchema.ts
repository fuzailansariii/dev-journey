import { z } from "zod";

export const validUserame = z
  .string()
  .min(3, "Username must be at least 3 characters.")
  .max(20, "Username must be less than 20 characters.")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special characters.");

export const signUpSchema = z.object({
  username: validUserame,
  email: z.string().email("Invalid email address."),
  password: z.string().min(6, "Password must be atleast 6 character long."),
});
