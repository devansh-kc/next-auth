import { ConnectDB } from "@/dbConfig/dbConfig";
import { User } from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";
ConnectDB();

export async function GET(request: NextRequest) {
  // TODO: EXtract data from Token
  try {
    const userId = await getDataFromToken(request);
    console.log(userId);
    const user = await User.findOne({ _id: userId }).select("-password");
    if (!user) {
      return NextResponse.json({ message: "Invalid Token" });
    }
    return NextResponse.json({
      mesaaage: "User found",
      data: user,
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
