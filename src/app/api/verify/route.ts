import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { error } from "console";

export async function POST(request: Request) {
  try {
    const { email, verificationCode } = await request.json();

    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!user) {
      console.log("No user found.");
      return NextResponse.json(
        {
          message: "Invalid or expired code.",
        },
        { status: 400 }
      );
    }

    const isValidVerificationCode = user.verificationCode === verificationCode;
    const isVerificationCodeNotExpired =
      new Date(user.verificationCodeExpiry) > new Date();

    if (isValidVerificationCode && isVerificationCodeNotExpired) {
      await prisma.user.update({
        where: {
          email: user.email,
        },
        data: {
          isVerified: true,
          verificationCode: "",
        },
      });

      console.log("User Verified Successfully.");
      return NextResponse.json(
        {
          message: "User verified.",
        },
        { status: 200 }
      );
    } else if (!isVerificationCodeNotExpired) {
      return NextResponse.json(
        {
          message: "Verification Code Expired",
        },
        { status: 400 }
      );
    } else {
      return NextResponse.json(
        { message: "Invalid Verification code." },
        { status: 400 }
      );
    }
  } catch (error) {
    console.log("Error verifying code.");
    return NextResponse.json(
      {
        message: "An error occured during verification",
      },
      { status: 500 }
    );
  }
}
