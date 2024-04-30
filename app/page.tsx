
import Image from "next/image";
import Link from "next/link";
import { getProducts, getTopProducts } from "@/utils";
import { Product } from "@/types";
import { ProductCard } from "@/components";


export default async function Home() {

  let topProducts : Product[] = await getProducts()
  const top3Products = topProducts.sort((a : Product, b : Product) => a.rating?.rate - b.rating.rate ).slice(0,3)

  return (
    <div className="w-full flex flex-col items-center">
      <div className="p-2 md:p-6  w-full md:max-w-6xl ">
              <div className='bg-[#c28ca5] text-white flex flex-col items-center justify-center text-xs w-full h-32'>
                  <h1 className='bg-[#c28ca5] font-bold text-lg' >Up to 50% off Summer sales</h1>
                  <p className='bg-[#c28ca5] text-center'>Summer is right around the corner. Find the items you need to ring in the new season!</p>
                  <p className='bg-[#c28ca5] text-center'>(JK this is not a real ecom site just a practice site)</p>
              </div>
              
              <div className=" md:flex md:justify-center md:items-center p-2 md:h-full">
              <div className="hidden  text-center md:text-left md:flex flex-col gap-4 row-start-2">
                        <p className="font-bold sm:text-4xl text-2xl">New Arrivals</p>
                        <p className="w-74 md:w-96">You can expore and shop many different collections from various brands here</p>
                        <Link href={"/shop"}>Shop Now</Link>
                  </div>
                  <div className="flex justify-center items-center ">
                  <Image 
                      src="/19.png"
                      alt="Image for hero"
                      width={300}
                      height={200}
                      className="rounded-e-xl"
                  />
                  </div>
                  {/* MOBILE  */}
                  <div className="md:hidden text-center md:text-left flex flex-col gap-4 row-start-2">
                        <p className="font-bold sm:text-4xl text-2xl">New Arrivals</p>
                        <p className="w-74 md:w-96">You can expore and shop many different collections from various brands here</p>
                        <Link href={"/shop"}>Shop Now</Link>
                  </div>
                  
              </div>
              <div >
              <h2 className="p-6 font-bold ml-6">Top Products</h2>
              <div className="flex flex-col md:grid grid-cols-3 justify-evenly gap-2">
                {top3Products.map(each=> {
                  return <div key={each.title}>
                    <ProductCard
                    id={each.id}
                    title={each.title}
                    price={each.price}
                    category={each.category}
                    image={each.image}
                    rating={each.rating}
                    />
                    </div>
                })}
              </div>
              </div>
          </div>
      </div>

  );
}
