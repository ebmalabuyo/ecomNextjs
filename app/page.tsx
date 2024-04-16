
import Image from "next/image";


export default function Home() {
  return (
    <div className="w-full flex flex-col items-center ">
      <div className="p-6 border w-full max-w-6xl ">
        <div className='bg-[#c28ca5] text-white flex flex-col items-center justify-center text-xs w-full h-32'>
                <h1 className='bg-[#c28ca5] font-bold text-lg' >Up to 50% off spring sales</h1>
                <p className='bg-[#c28ca5] text-center'>Spring is right around the corner. Find the items you need to ring in the new season!</p>
                <p className='bg-[#c28ca5] text-center'>(JK this is not a real ecom site just a practice site)</p>
            </div>
            <div className="w-96 h-96 overflow-hidden relative">
            <Image
            src={"/19.png"}
            alt="Image for Store"
            fill
            />
            </div>
      </div>
      
    </div>
  );
}
