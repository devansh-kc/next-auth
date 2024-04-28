import { ConnectDB } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

import jwt from "jsonwebtoken"
ConnectDB();

export const getDataFromToken = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    console.log(token)
   const decodedToken:any =  jwt.verify(token, process.env.TOKEN_SECRET!);
   console.log(decodedToken)
   return decodedToken.id
  } catch (error: any) {
    throw new Error(error.message);
  }
};