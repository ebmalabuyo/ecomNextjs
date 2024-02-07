'use client'
import React, { useRef } from 'react'
import { useStore } from '../utils/store'
import { Product } from '@/types'

interface storeProps {
    cart: Product[],
    // cartTotal: number

}

function StoreHelper({cart} : storeProps) {

    const initialized = useRef(false)
    if(!initialized.current){
        // useStore.setState({cart})
        initialized.current = true
    }
    return null
}

export default StoreHelper