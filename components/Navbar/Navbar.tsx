"use client"
import React from 'react'
import { FaShoppingBag } from "react-icons/fa";
import Link from 'next/link';
import { FaShoppingCart } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { useSession, signOut } from 'next-auth/react';
import { useStore } from '@/utils/store';
import { IoPersonOutline } from "react-icons/io5";

const Navbar = () => {
    const {data: session} = useSession()
    const cartLength = useStore((state) => state.cart.length)
    // const {cart} = useStore()
    

  return (
    <>
    {/* <StoreHelper cart={cart}/> */}
    <nav className=" w-full flex p-8 border-b-2   text-xs md:text-sm">
        <div className="hidden lg:flex gap-6 md:flex-grow text-xs">
            <a href='https://www.ebmcodes.tech/' target='_blank'><h3 >Meet the Developer</h3></a>
            <a href='https://github.com/ebmalabuyo/portfolioNext'><h3 >Source Code</h3></a>
        </div>


            <Link href={"/"} className=' flex items-center gap-1'>
            <SiNextdotjs size={40}/>
            SHOPPING
            </Link>


        <div className="flex gap-4 lg:w-1/2 md:justify-end lg:mr-4 ">
            <h3>
               {!session ? 
               <Link href="/login" className=' flex items-center gap-1 bg-slate-50'> <IoPersonOutline  size={20}/> <p>Login</p></Link> 
               : <button onClick={() => signOut()} className='text-white border bg-slate-50  p-2 rounded'>Logout</button>
               }
            </h3>
            <h3>
                <Link href="/cart" className='flex '>
                    <FaShoppingCart size={20} /> 
                    <h3>{`(${cartLength})`}</h3> 
                    </Link>
            </h3>
        </div>

        </nav>
        </>
  )
}

export default Navbar