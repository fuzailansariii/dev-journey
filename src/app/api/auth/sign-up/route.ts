import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { signUpSchema } from "@/schemas/signupSchema";
import { SendVerificationEmail } from "@/helpers/SendVerificationEmail";
import toast from "react-hot-toast";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsedBody = signUpSchema.parse(body);
    const { username, email, password } = parsedBody;

    const verifiedExistingUsername = await prisma.user.findUnique({
      where: {
        username,
        isVerified: true,
      },
    });

    if (verifiedExistingUsername) {
      return NextResponse.json(
        {
          success: false,
          message: "Username is already taken",
        },
        {
          status: 400,
        }
      );
    }

    const existingUserByEmail = await prisma.user.findUnique({
      where: { email },
    });
    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();
    if (existingUserByEmail) {
      if (existingUserByEmail.isVerified) {
        return NextResponse.json(
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
          username,
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
      username,
      email,
      verificationCode
    );
    // console.log(emailResponse);
    if (!emailResponse.success) {
      return NextResponse.json(
        {
          success: false,
          message: emailResponse.message,
        },
        { status: 500 }
      );
    }
    return NextResponse.json(
      {
        success: true,
        message: "User registered successfully, Please verify your email.",

        // will remove it after getting a domain for this app
        verificationCode,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log("Error during registration. ", error);
    toast.error("Error during registration.");
    return NextResponse.json(
      {
        success: false,
        message: "Error during registration.",
        error: error,
      },
      { status: 500 }
    );
  }
}
