import prisma from "@/lib/prisma";
import { validUserame } from "@/schemas/signupSchema";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const UsernameQuerySchema = z.object({
  username: validUserame,
});

export async function GET(request: NextRequest) {
  try {
    // const usernameParam = request.nextUrl.searchParams.get("username");
    // console.log("Username Param data: ", result.data);

    const { searchParams } = new URL(request.url);
    const queryParam = { username: searchParams.get("username") };
    const result = UsernameQuerySchema.safeParse(queryParam);

    if (!result.success) {
      const usernameError = result.error.format().username?._errors || [];
      return NextResponse.json(
        {
          success: false,
          message:
            usernameError?.length > 0
              ? usernameError.join(", ")
              : "Invalid query parameters",
        },
        { status: 400 }
      );
    }

    const { username } = result.data;

    const verifiedExistingUsername = await prisma.user.findUnique({
      where: { username, isVerified: true },
    });

    if (verifiedExistingUsername) {
      return NextResponse.json(
        {
          success: false,
          message: "Username is already taken",
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Username is availble" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error Checking Username: ", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error checking username.",
      },
      { status: 500 }
    );
  }
}
