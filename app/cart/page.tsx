'use client'
import React from 'react'
import { useStore } from '../../utils/store'
import { CartItem } from '@/components'
import { Product } from '@/types'

const CartPage = () => {
   var {cart, cartTotal} = useStore()
   
   var shipping = 5.99
   if(cart.length === 0) {
    shipping = 0
   }
    // const test = useStore.getState().cart
    // console.log(test)
    // if (typeof window !== "undefined" && JSON.parse(localStorage.getItem("cart") as string) !== null){
    //   console.log("testing local storage")
    //   cart = JSON.parse(localStorage.getItem("cart") as string)
    //   }
    

  return (
    <div className=''>
    
    <div className='flex flex-col items-center gap-4'>
      <h1 className='font-bold'>Shopping Bag</h1>
          <div className='flex flex-col md:flex-row md:w-1/2 md:justify-between'>
                            <div className='flex flex-col w-1/2 '>
                            {cart.length === 0 ? <p>Your Cart is Empty :(</p> : cart.map(each=> {
                              return <div key={each.id}>
                                          <CartItem item = {each}/>
                                     </div>
                            })}
                              </div>
                            <div className='flex flex-col items-center md:w-1/2 p-2 xs:border-t md:border-l border-black justify-end'>
                                <div className='flex justify-between w-full'>
                                  <p>Order Value</p>
                                  <p>${cartTotal}</p>
                                </div>
                                <div className='flex justify-between w-full'>
                                  <p>Shipping Fee: </p>
                                  <p>${shipping}</p>
                                </div>
                                <hr className='h-0.5 w-full bg-black '/>
                                <div className='flex justify-between w-full'>
                                  <p>Total: </p>
                                  <p>${shipping + cartTotal}</p>
                                </div>
                                <button className='text-white border w-full bg-blue-700 border-blue-600 p-2 rounded'>Check Out</button>
                            </div>
            </div>
    </div>
    </div>
  )
}

export default CartPage