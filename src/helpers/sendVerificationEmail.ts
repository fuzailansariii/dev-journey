import { resend } from "@/lib/resend";
import { ApiResponse } from "@/types/apiResponse";
import VerificationEmail from "../../Emails/VerificationEmail";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "<onboarding@resend.dev>",
      to: email,
      subject: "Verification Code < DevJourney />",
      react: VerificationEmail({
        username,
        verifyCode,
      }),
    });
    return { success: true, message: "Verification email send successfully." };
  } catch (emailError) {
    console.error("error sending verification email", emailError);
    return { success: false, message: "Failed to send verification email." };
  }
}
