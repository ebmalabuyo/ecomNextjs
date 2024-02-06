'use client'
import React from 'react'
import { useStore } from '../../utils/store'

const CartPage = () => {
    const cart = useStore((state) => state.cart)
    // const test = useStore.getState().cart
    // console.log(test)
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