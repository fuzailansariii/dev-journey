import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";

// Handler function for POST request to register a new user
async function POST(request: Request) {
  await dbConnect();

  try {
    // Extract user details from the request body
    const { username, email, password } = await request.json();

    // Check if the username already exists and is verified
    const existingUserByUsername = await UserModel.findOne({
      username,
      isVerified: true,
    });
    if (existingUserByUsername) {
      return Response.json(
        {
          success: false,
          message: "Username is already taken.",
        },
        {
          status: 400,
        }
      );
    }

    // Check if the email already exists
    const existingUserByEmail = await UserModel.findOne({ email });
    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
    if (existingUserByEmail) {
      if (existingUserByEmail.isVerified) {
        return Response.json(
          {
            success: false,
            message: "User already exist with this email.",
          },
          { status: 400 }
        );
      } else {
        // Update existing user's password and verification code
        const hashedPassword = await bcrypt.hash(password, 10);
        existingUserByEmail.password = hashedPassword;
        existingUserByEmail.verifyCode = verifyCode;
        existingUserByEmail.verifyCodeExpiry = new Date(Date.now() + 3600000);
        await existingUserByEmail.save();
      }
    } else {
      // Create a new user if no existing user is found
      const hashedPassword = await bcrypt.hash(password, 10);
      const expiryDate = new Date();
      expiryDate.setHours(expiryDate.getHours() + 1);

      const newUser = new UserModel({
        username,
        email,
        password: hashedPassword,
        verifyCode,
        verifyCodeExpiry: expiryDate,
        isVerified: false,
      });
      await newUser.save();
    }

    // Sending verification email
    const emailResponse = await sendVerificationEmail(
      email,
      username,
      verifyCode
    );

    if (!emailResponse.success) {
      return Response.json(
        { success: false, message: emailResponse.message },
        { status: 500 }
      );
    }

    return Response.json(
      {
        success: true,
        message: "User registered successfully, Please verify your email",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error Registering user", error);
    return Response.json(
      {
        success: false,
        message: "Error Registering user",
      },
      { status: 500 }
    );
  }
}
