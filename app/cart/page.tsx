'use client'
import React from 'react'
import { useStore } from '../../utils/store'

const CartPage = () => {
   var cart = useStore((state) => state.cart)
    // const test = useStore.getState().cart
    // console.log(test)
    // if (typeof window !== "undefined" && JSON.parse(localStorage.getItem("cart") as string) !== null){
    //   console.log("testing local storage")
    //   cart = JSON.parse(localStorage.getItem("cart") as string)
    //   }
    

  return (
    <div>
      <h1>CartPage</h1>
      {cart.map(each=> {
        return <p key={each.id}>{each.title}</p>
      })}

    </div>
  )
}

export default CartPage