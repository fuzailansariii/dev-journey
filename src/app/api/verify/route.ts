import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { username, verificationCode } = await request.json();

    console.log("Recived username: ", username);
    console.log("Recived VerificationCode: ", verificationCode);

    if (!username || !verificationCode) {
      return NextResponse.json(
        { message: "Username and verification code are required." },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { username },
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
          username: user.username,
        },
        data: {
          isVerified: true,
          verificationCode: null,
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
  } catch (error: any) {
    console.log("Error verifying code.", error.message);
    return NextResponse.json(
      {
        message: "An error occured during verification",
      },
      { status: 500 }
    );
  }
}
