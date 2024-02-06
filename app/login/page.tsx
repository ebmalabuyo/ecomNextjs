'use client'

import React, { EventHandler, useEffect } from 'react'
import { useState } from 'react';
import { ChangeEvent } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

const Login = () => {
  const session  = useSession()
  const router = useRouter()
  const [error, setError] = useState('')
  
  useEffect(() => {
    if(session?.status === "authenticated" ) {
      router.replace("/cart")
    }
  }, [session, router])

    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    
      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // In a real application, you would handle authentication logic here

        const res = await signIn("credentials",
        {
          redirect: false,
          email: formData.email,
          password: formData.password
        } )
        console.log(res)
        // if(res?.error) {
        //   setError("Email or Password is incorrect")
        // }
        if(res?.url) {
          router.replace("/")
        }
        else{
          setError("Email or Password is incorrect")
        }
      };

      if (session.status === "loading") {
        return (<p className='flex justify-center'>Loading...</p>)
      }
    
      return (session.status !== "authenticated" &&(
        <div className="flex flex-col items-center container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={(e) => handleSubmit(e)} className="max-w-md mx-auto">
        <label className="block mb-2">
          email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </label>
        <label className="block mb-2">
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </label>
        {error && <p>{error}</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Login
        </button>
      </form>
    </div>))
    };
    

export default Login