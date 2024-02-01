import React from 'react'
import { FaShoppingBag } from "react-icons/fa";
import Link from 'next/link';
import { FaShoppingCart } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (

    <nav className=" w-full flex p-8 justify-between border-b-2 border-black text-sm md:text-md">
        <div className="hidden lg:flex gap-6 md:flex-grow text-xs">
            <a><h3 >Meet the Developer</h3></a>
            <a><h3 >Source Code</h3></a>
        </div>

        <div className='flex lg:w-1/4 md:justify-end items-center gap-2'>
            <SiNextdotjs size={40}/>
            SHOPPING
        </div>
        
        <div className="flex gap-4 lg:w-1/2 lg:justify-end lg:mr-4">
            <h3>
                <Link href="/"> Sign In</Link>
            </h3>
            <h3>
                <Link href="/" className='flex'>
                    <h3>Cart</h3> <FaShoppingCart/> 
                    </Link>
            </h3>
        </div>

        </nav>
  )
}

export default Navbar