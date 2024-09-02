import prisma from "@/lib/prisma";
import { validUserame } from "@/schemas/signupSchema";
import { NextRequest } from "next/server";
import { z } from "zod";

const UsernameQuerySchema = z.object({
  username: validUserame,
});

export async function GET(request: NextRequest) {
  try {
    const urlParam = request.nextUrl;
    const usernameParam = urlParam.searchParams.get("username");
    // console.log("Username Param data: ", result.data);

    const result = UsernameQuerySchema.safeParse({ username: usernameParam });

    if (!result.success) {
      const usernameError = result.error.format().username?._errors || [];
      return Response.json(
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
      return Response.json(
        {
          success: false,
          message: "Username is already taken",
        },
        { status: 200 }
      );
    }

    return Response.json(
      { success: true, message: "Username is availble" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error Checking Username: ", error);
    return Response.json(
      {
        success: false,
        message: "Error checking username.",
      },
      { status: 500 }
    );
  }
}
