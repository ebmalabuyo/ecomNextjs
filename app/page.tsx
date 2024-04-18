
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="w-full flex flex-col items-center ">
      <div className="p-2 md:p-6 border w-full max-w-6xl ">
            <div className='bg-[#c28ca5] text-white flex flex-col items-center justify-center text-xs w-full h-32'>
                <h1 className='bg-[#c28ca5] font-bold text-lg' >Up to 50% off spring sales</h1>
                <p className='bg-[#c28ca5] text-center'>Spring is right around the corner. Find the items you need to ring in the new season!</p>
                <p className='bg-[#c28ca5] text-center'>(JK this is not a real ecom site just a practice site)</p>
            </div>
            <div className="relative flex justify-center w-full h-full ">
                <Image 
                    src="/19.png"
                    alt="Image for hero"
                    width={400}
                    height={300}
                />
                <div className="absolute bottom-20 flex flex-col items-center">
                      <p className="font-bold text-lg">New Arrivals</p>
                      <h1 className="font-bold sm:text-4xl text-2xl">Summer Utility Edit</h1>
                      <Link href={"/shop"}>Shop Now</Link>
                </div>
            </div>
          </div>
      </div>

  );
}
