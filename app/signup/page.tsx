'use client'

import { isEmail } from '@/utils';
import {signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { EventHandler, useEffect } from 'react'
import { useState } from 'react';
import { FormEvent, ChangeEvent } from 'react';
import Link from 'next/link';

const SignUp = () => {
  const router = useRouter()
  const session = useSession()
  const [error, setError] = useState('')
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    
    useEffect(()=> {
      if (session.status === "authenticated")
      router.push('/cart')
    })
      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validEmail = isEmail(formData.email)
        if (validEmail) {

          const res = await fetch("/api/register", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: formData.email,
              password: formData.password
                          })
          })
          console.log(res)
          if (res.status === 400) {
            setError("email already exists")
          }
          else if (res.status === 200) {
            // console.log('Sign Up submitted:', formData);
                const result = await signIn("credentials",
            {
              redirect: false,
              email: formData.email,
              password: formData.password
            } )
            if(result?.url){
            router.replace("/cart")
            }
          }
          else {
            setError("Problem with sign up")
          }
        }
        else{
          setError("not a valid email")
        }
        // In a real application, you would handle authentication logic here
        
      };

      if( session.status === "loading"){
      return (<p className='flex justify-center'>Loading...</p>)
      }
      
      return (session.status !== "authenticated" && (
        <div className="flex flex-col items-center container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={(e) => handleSubmit(e)} className="max-w-md mx-auto">
        <label className="block mb-2">
          email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
            required
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
            required
          />
        </label>
        <div className='flex flex-col'>
        <Link className='text-center text-blue-500' href={"/login"}>Already have an account</Link>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Sign Up
        </button>
        {error && <p>{error}</p>}
        </div>
      </form>
    </div>))
    };
    

export default SignUp