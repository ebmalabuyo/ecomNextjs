"use client"
import React, { useState } from 'react'
import { FaShoppingBag } from "react-icons/fa";
import Link from 'next/link';
import { FaShoppingCart } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { useSession, signOut } from 'next-auth/react';
import { useStore } from '@/utils/store';
import { IoPersonOutline } from "react-icons/io5";
import { FiAlignJustify } from "react-icons/fi";

const Navigation = () => {
    const {data: session} = useSession()
    const cartLength = useStore((state) => state.cart.length)
    // const {cart} = useStore()
    const [toggleNav, setToggleNav] = useState(false);

  return (
    <>
    {/* <StoreHelper cart={cart}/> */}
    <nav className='flex justify-between p-2 text-xs md:text-sm mr-0 ml-2 md:mr-10 md:ml-10 m-2 '>
        <div className='flex w-full items-center'>
            <div className='w-full md:hidden z-10' >
            <FiAlignJustify size={30} onClick={()=>setToggleNav(!toggleNav)}className={`${toggleNav ? "rotate-90" : ""} transition-all`} />
            </div>
            <div className={` flex flex-col md:flex-row gap-3 md:static ${toggleNav ? " left-0   border" : "-left-96 "} inset-y-0 items-center transition-all ease-in-out text-center md:border-none  absolute mt-20 md:mt-0 z-20 p-6 md:p-0 `}>
            <a href='https://www.ebmcodes.tech/' target='_blank'><h3>Meet the Developer</h3></a>
            <a href='https://github.com/ebmalabuyo/portfolioNext'><h3 >Source Code</h3></a>
            </div>
        </div>

            <div className=' w-full flex justify-center gap-2 relative '>
            
            <Link href={"/"} className='  text-center flex justify-end md:justify-center flex-col items-center'>
            <SiNextdotjs size={40} />
            <h1>SHOPPING</h1>
            </Link>
            </div>


        <div className=' flex w-full justify-end items-center gap-1 md:gap-4 '>
            <h3>
               {!session ? 
               <Link href="/login" className='flex'>
                   <IoPersonOutline  size={20}/> 
                   <p>Login</p>
               </Link> 
               : <button onClick={() => signOut()} className=' bg-blue-600 text-white border p-2 rounded'>Logout</button>
               }
            </h3>
            <h3>
                <Link href="/cart" className='flex'>
                    <FaShoppingCart size={20} /> 
                    <h3>{`(${cartLength})`}</h3> 
                </Link>
            </h3>
        </div>

        </nav>
        </>
  )
}

export default Navigation
