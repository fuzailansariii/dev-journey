import { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import UserModel from "@/model/User";
import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        username: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials: any): Promise<any> {
        await dbConnect();
        try {
          const user = await UserModel.findOne({
            $or: [
              { email: credentials.identifier },
              { password: credentials.identifier },
            ],
          });

          if (!user) {
            throw new Error("No user found with this email.");
          }

          if (!user.isVerified) {
            throw new Error("Please verify your account before login.");
          }

          const isCorrectPassword = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (isCorrectPassword) {
            return user;
          } else {
            throw new Error("Incorrect password");
          }
        } catch (error: any) {
          throw new Error(error);
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token._id = user._id?.toString();
        token.isVerified = user.isVerified;
        token.username = user.username;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user._id = token._id;
        session.user.isVerified = token.isVerified;
        session.user.username = token.username;
      }
      return session;
    },
  },

  pages: {
    signIn: "/sign-in",
  },

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
};
