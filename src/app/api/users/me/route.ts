import { ConnectDB } from "@/dbConfig/dbConfig";
import { User } from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";
ConnectDB();

export async function GET(request: NextRequest) {
  // TODO: EXtract data from Token
  try {
    const userId = await getDataFromToken(request);
    const user = User.findOne({ _id: userId }).select("-password");
    if (!user) {
      return NextResponse.json({ message: "Invalid Token", data: user });
    }
    return NextResponse.json({ message: "user found", success: true, user });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
