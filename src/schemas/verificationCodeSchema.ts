import { z } from "zod";

export const verifySchema = z.object({
  VerificationCode: z.string().length(6, "Code must be 6 digit"),
});
