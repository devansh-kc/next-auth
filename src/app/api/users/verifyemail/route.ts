import { ConnectDB } from "@/dbConfig/dbConfig";
import { User } from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
// import { sendEmail } from "@/helpers/mailer";
// import bcryptjs from "bcryptjs";

export async function POST(request: NextRequest) {
  ConnectDB();

  try {
    const reqBody = await request.json();
    console.log(reqBody);
    const { token } = reqBody;
    console.log(token);
    const user = await User.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() },
    });
    if (!user) {
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }
    console.log(user);
    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;

    const updatedUser = await user.save();
    console.log(updatedUser);
    return NextResponse.json(
      { message: "Email verified sucessfully ", sucess: true, updatedUser },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
