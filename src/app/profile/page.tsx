"use client"
import React,{useState} from 'react'
import axios from 'axios'
import Link from 'next/link'
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

function ProfilePage() {
    const router  = useRouter()
    const [data, setdata] = useState("nothing")
    const getUserDetails = async ()=>{
        const response = await axios.get("/api/users/me")
        console.log(response.data)
    }
  return (
    <div>ProfilePage</div>
  )
}

export default ProfilePage