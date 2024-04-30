"use client";
import axios from "axios";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");
  //   const router = useRouter();
  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (error: any) {
      setError(error.message);
      toast.error(error.message);
      console.log(error.response.data);
    }
  };
  useEffect(() => {
    setError("")
    const UrlToken = window.location.search.split("=")[1];
    setToken(UrlToken || "");
    // const { query } = router;
    // const urlTokenTwo = query.token;
  }, []);
  useEffect(() => {
    setError("")
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl">Verify Email</h1>
      <h2 className="font-mono text-black bg-white p-3 m-3">
        {token ? `${token}` : "No token"}
      </h2>
      {verified && (
        <div>
          <h2 className="font-bold font-mono">
            {" "}
            You are  verified Welcome to fightclub{" "}
          </h2>
          <Link href="/login"> Login</Link>
        </div>
      )}
      {error && (
        <div className="font-bold font-mono text-center items-center ">
          <h2 className="p-3 m-3">
            error:{error}<br/>
            The first rule of Fight Club is: you do not talk about Fight Club.
            The second rule of Fight Club is: you DO NOT talk about Fight Club!{" "}
          </h2>
          <Link href="/login" className="p-3 m-3  bg-white border text-black rounded-lg hover:bg-black hover:text-white"> Login</Link>
        </div>
      )}
    </div>
  );
}

export default VerifyEmailPage;
