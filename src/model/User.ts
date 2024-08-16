import mongoose, { Schema, Document, Mongoose } from "mongoose";

// Define the User interface, which extends the Mongoose Document interface.
export interface User extends Document {
  username: string;
  email: string;
  password: string;
  isVerified: Boolean;
  verifyCode: string;
  verifyCodeExpiry: Date;
}

// Create the User schema using the defined User interface.
const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "Username is required."],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    unique: true,
    match: [/.+\@.+\..+/, "Please enter valid email."],
  },
  password: {
    type: String,
    required: [true, "Password is required."],
  },
  verifyCode: {
    type: String,
    required: [true, "Verify Code is required."],
  },
  verifyCodeExpiry: {
    type: Date,
    required: [true, "Verify Code Expiry is required."],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
});

// Check if a model named 'User' already exists; if not, create and export it.
// This ensures that the model is not recreated each time the code runs.
const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;
