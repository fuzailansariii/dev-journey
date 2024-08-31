import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string().max(20, "Name must be less than 20 characters."),
  email: z.string().email("Invalid email address."),
  password: z.string().min(6, "Password must be atleast 6 character long."),
});
