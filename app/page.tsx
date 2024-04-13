
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <div>
        <div className="w-10 h-10 overflow-hidden relative">
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
