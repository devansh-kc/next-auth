"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      router.push("/profile");
    } catch (error: any) {
      console.log("Login failed");
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <div className="flex flex-col  items-center justify-center min-h-screen py-2">
      <h1 className="p-3 m-3 text-4xl font-bold font-mono">{loading ? "processing" : "Login"}</h1>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
        className="p-3 m-3 bg-transparent border rounded-lg"
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
        className="p-3 m-3 bg-transparent border rounded-lg "
      />
      <button
        className=" border rounded-lg p-3 m-3 justify-start items-start font-mono font-bold hover:bg-whitehover:text-black"
        onClick={onLogin}
      >
        {buttonDisabled ? " No Login" : " Login"}
      </button>
      <Link href={"/profile"} className="font-mono ">
        Visit Sign Up page{" "}
      </Link>
    </div>
  );
};


export default Login;
