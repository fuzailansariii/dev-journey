import VerificationEmail from "@/emails/VerificationEmail";
import { resend } from "@/lib/resend";
import { ApiResponse } from "@/types/ApiResponse";

export async function SendVerificationEmail(
  email: string,
  name: string,
  verificationCode: string
): Promise<ApiResponse> {
  console.log("This is sendVerificationEmail: ", {
    email,
    name,
    verificationCode,
  });
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "SignUp-Here Verification Email",
      react: VerificationEmail({ name, verificationCode }),
    });
    return { success: true, message: "Verification email send successfully" };
  } catch (emailError) {
    console.log("Error sending verification email.", emailError);
    return { success: false, message: "Failed to send verification email" };
  }
}
