import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { signUpSchema } from "@/schemas/signupSchema";
import { SendVerificationEmail } from "@/helpers/SendVerificationEmail";
import toast from "react-hot-toast";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsedBody = signUpSchema.parse(body);
    const { name, email, password } = parsedBody;

    const existingUserByEmail = await prisma.user.findUnique({
      where: { email: email },
    });
    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();
    if (existingUserByEmail) {
      if (existingUserByEmail.isVerified) {
        return Response.json(
          {
            success: false,
            message: "User already exist with this email",
          },
          { status: 400 }
        );
      } else {
        const hashedPassword = await bcrypt.hash(password, 12);
        await prisma.user.update({
          where: { email },
          data: {
            password: hashedPassword,
            verificationCode,
            verificationCodeExpiry: new Date(Date.now() + 3600000),
          },
        });
      }
    } else {
      const hashedPassword = await bcrypt.hash(password, 12);

      await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          isVerified: false,
          verificationCode,
          verificationCodeExpiry: new Date(Date.now() + 3600000),
        },
      });
    }

    // sending verification email.
    const emailResponse = await SendVerificationEmail(
      name,
      email,
      verificationCode
    );
    console.log(emailResponse);
    if (!emailResponse.success) {
      return Response.json(
        {
          success: false,
          message: emailResponse.message,
        },
        { status: 500 }
      );
    }
    return Response.json(
      {
        success: true,
        message: "User registered successfully, Please verify your email.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log("Error during registration. ", error);
    toast.error("Error during registration.");
    return Response.json(
      {
        success: false,
        messag: "Error during registration.",
        error: error,
      },
      { status: 500 }
    );
  }
}
