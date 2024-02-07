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
    className='text-white border bg-blue-700 border-blue-600 p-2 rounded'
    type='submit'
    onClick={() => {
      console.log(`added ${item.title}`)
      useStore.getState().addToCart(item)
    }
    
    }
    >
    {label}
    </button>
  )
}

export default Button