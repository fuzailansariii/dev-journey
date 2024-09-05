import { z } from "zod";
import { validUserame } from "./signupSchema";

export const contactSchema = z.object({
  username: validUserame,
  email: z.string().email("Invalid email address."),
  message: z
    .string()
    .min(30, "Message must be at least 50 characters.")
    .max(300, "Message must be less than 300 characters."),
});
