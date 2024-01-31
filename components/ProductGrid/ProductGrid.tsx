"use client"
import React, { useEffect, useState } from 'react'
import { ProductCard, SideBar } from '..'
import { Product } from '@/types'
import { ChangeEvent } from 'react'
import sortByProperty from '@/utils'
import { title } from 'process'

type GridProps = {
    products: Product[]
}

const sortedItems = [
    {
        title: "",
        value: "",
    },
    {
        title: "Lowest Price",
        value: "price",
    },
    {
        title: "Highest Price",
        value: "High",
    }
]

const categories = [
    {
        title: 'All',
        value: "All",
    },
    {
        title: "Men's Clothing",
        value: "men's clothing",
    },
    {
        title: "Women's Clothing",
        value: "women's clothing",
    },
    {
        title: 'Jewelry',
        value: "jewelry",
    },
    {
        title: 'Electronics',
        value: "electronics",
    },

]

const ProductGrid = ({products} : GridProps) => {

    const [sortValue, setSortValue] = useState('')
    const [clientProducts, setClientProducts] = useState(products)
    const [categoryValue, setCategoryValue] = useState(categories[0].value)

    //HANDLING SORTING 
    useEffect(()=> {
        if (sortValue === '') {
            setClientProducts(products)
        }
        else{
        const arrangedProducts = [...clientProducts].sort(sortByProperty(sortValue))
        setClientProducts(arrangedProducts)
        }
    }, [sortValue, clientProducts, products])
    // END------- HANDLING SORTING

    /// CATEGORY FUNCTIONALITY
    const categoryClick = (option : string) => {
        setCategoryValue(option)
        const categorizedItems = products.filter((item) => item.category === option)
        setClientProducts(categorizedItems)
    }

  return (
    <>
    <div className="md:w-40 border-blue-700  md:col-span-1 md:row-span-2 border ">
            <b><h2>Categories</h2></b>
            <ul className=' flex flex-col gap-6'>
            {categories.map(each=> {
                return <li className={`${categoryValue === each.value ? 'text-blue-600':''} hover:cursor-pointer`} onClick={() =>categoryClick(each.value)} key={each.value}>{each.title}</li>
            })}
            </ul>
        </div>

    {/* SORTING TAB  */}
    <div className='md:col-span-2 md:col-start-2  border border-green-700 '>
    <label htmlFor="categories" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sort By</label>
      <select onChange={(e) => setSortValue(e.target.value)} value={sortValue} id="categories" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      {sortedItems.map((each,i) => {
        return <option key={each.value} value={each.value}>{each.title}</option>
      })}
    </select>
    </div>
    {/* END ------ SORTING TAB */}

      {/* PRODUCT GRID  */}
    <div className="grid grid-cols-2 gap-2 p-2  md:col-span-2  md:grid-cols-3  border border-black">
            {clientProducts.map((eachItem : Product) => {
                return <div key={eachItem.id}>
                    <ProductCard
                    id={eachItem.id}
                    title={eachItem.title}
                    price={eachItem.price}
                    category={eachItem.category}
                    description={eachItem.description}
                    image={eachItem.image}
                /></div>
            })}
        </div>
        {/* END-------- PRODUCT GRID  */}
        </>

  )
}

export default ProductGrid