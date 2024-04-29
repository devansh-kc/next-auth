"use client";
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const SignUp = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [button, setButtonDisbled] = useState(false);
  const [loading, setLoading] = useState(false);
  const onSignup = async () => {};
  try {
  } catch (error: any) {
    console.log("Signup failed");
  }
  return <div>SignUp</div>;
};

export default SignUp;
