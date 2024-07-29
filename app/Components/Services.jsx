import Image from "next/image";
import { servicesData } from "./constant";


const Services = () => {
  return (
    <div>
      <h3 className="text-md pt-6 text-[#00a859] font-medium uppercase font-poppins text-center">Our Services</h3>
      <h1 className='text-2xl md:2xl lg:text-3xl xl:text-5xl  font-bold capitalize font-poppins text-gray-900 text-center mb-12'>
        What makes us stand out
      </h1>
      <div className='slider h-[400px] w-[95%] mx-auto snap-x snap-mandatory  relative overflow-hidden'>
        <div className='slide-track flex gap-3 absolute left-0 animate-slide'>
          {servicesData.map((item, id)=>(
            <div className='relative h-[400px] w-[300px] overflow-hidden bg-blue-500 transition-transform duration-300 hover:scale-110 cursor-pointer' key={item.id}>
            <Image src={item.image} alt="Portrait" className="object-cover w-full h-full" />
   
             {/* Gradient overlay */}
             <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-80"></div>
               <div className="absolute inset-0 flex flex-col justify-start items-start  text-white px-4 mt-8">
               <p className="font-Josefin_Sans font-bold">{item.paragraph}</p>
                 <h1 className="text-3xl font-poppins-bold font-bold w-[280px]">{item.headingText}</h1>
               </div>
 
               <button className="absolute bottom-3 left-4 py-3 px-5 bg-white text-black font-Josefin_Sans shadow-xl rounded-full">
                 {item.button}
               </button>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
