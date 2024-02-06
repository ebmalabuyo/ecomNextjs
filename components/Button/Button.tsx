'use client'
import { Product } from '@/types'
import { useStore } from '@/utils/store'
import React from 'react'

type ButtonProps = {
  label: string,
  item: Product

}

const Button = ({label, item} : ButtonProps) => {
  return (
    <button
    type='submit'
    onClick={() => {
      console.log(`added ${item.title}`)
      
      useStore.getState().addToCart(item)
      console.log(useStore.getState().cart)
    }
    
    }
    >
    {label}
    </button>
  )
}

export default Button