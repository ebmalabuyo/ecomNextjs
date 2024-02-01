"use client"
import React, { useEffect, useState } from 'react'
import { ProductCard, SideBar } from '..'
import { Product } from '@/types'
import { ChangeEvent } from 'react'
import sortByProperty from '@/utils'

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
        value: "jewelery",
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

    // SORTING FUNCTIONALITY
    const handleSort = (option : string) => {

    const arrangedProducts = [...clientProducts].sort(sortByProperty(option))
    setClientProducts(arrangedProducts)
    }



    /// CATEGORY FUNCTIONALITY
    const categoryClick = (option : string) => {
        if (option === categoryValue) return
        setCategoryValue(option)
        if (option === "All") setClientProducts(products)
        else {
        const categorizedItems = products.filter((item) => item.category === option)
        setClientProducts(categorizedItems)
        setSortValue('')
        }
    }

  return (
    <div className='md:flex md:flex-row p-2'>
    {/* CATEGORIES EDIT  */}
    <div className=" flex flex-col items-center md:w-48">
            <b><h2>Categories</h2></b>
            <ul>
            {categories.map(each=> {
                return <li className={`${categoryValue === each.value ? 'text-blue-600':''} hover:cursor-pointer`} onClick={() =>categoryClick(each.value)} key={each.value}>{each.title}</li>
            })}
            </ul>
        </div>
    {/*END----------- CATEGORIES EDIT  */}

    <div className='md:col-span-2 md:col-start-1 w-full flex flex-col'>
    {/* SORTING TAB  */}
    <div className=' border border-green-700 min-w-full p-2'>
    <label htmlFor="categories" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sort By</label>
      <select onChange={(e) => handleSort(e.target.value)} value={sortValue} id="categories" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      {sortedItems.map((each,i) => {
        return <option key={each.value} value={each.value}>{each.title}</option>
      })}
    </select>
    </div>
    {/* END ------ SORTING TAB */}


      {/* PRODUCT GRID  */}
    <div className=" grid grid-cols-2 md:grid-cols-3 gap-2 w-full h-full">
            {clientProducts.map((eachItem : Product) => {
                return <div  key={eachItem.id}>
                    <ProductCard
                    id={eachItem.id}
                    title={eachItem.title}
                    price={eachItem.price}
                    category={eachItem.category}
                    image={eachItem.image}
                /></div>
            })}
        </div>
        {/* END-------- PRODUCT GRID  */}
        </div>

        </div>


  )
}

export default ProductGrid