import mongoose, { mongo } from "mongoose";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please Provide a username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please Provide a email"],
    unique: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

export const User =
  mongoose.models.users || mongoose.model("users", userSchema);
