import Image from "next/image";
import portrait from "/public/images/portrait-person-wearing-yellow.jpg"
import studio from "/public/images/african-woman-posing-studio.jpg"
import event from "/public/images2/IMG_1604.jpg"

const Services = () => {
  return (
    <div>
      <h3 className="text-md pt-6 font-medium uppercase font-raleway text-center">Our Services</h3>
      <h1 className='text-2xl md:text-2xl lg:text-3xl xl:text-5xl font-bold capitalize font-poppins text-gray-900 text-center mb-12'>
        What makes us stand out
      </h1>
      <div className='slider h-[400px]  relative overflow-hidden'>
        <div className='slide-track flex gap-3 absolute left-0 animate-slide'>
          {/* Adjust width here based on how many items you have and their width */}
          <div className='h-[400px] w-[300px] bg-blue-500 transition-transform duration-300 hover:scale-110 cursor-pointer '> 
            <Image src={portrait} alt="" className="relative"/>
            <div className="absolute top-12 px-4">
              <p className="text-white font-Josefin_Sans font-bold">Explore</p>
              <h1 className="text-white text-3xl font-poppins-bold font-bold w-1/2">Portarit Photography</h1>
            </div>
            <button className="py-3 px-5 bg-white text-black font-Josefin_Sans shadow-sm absolute bottom-3 mx-4 rounded-full">Explore More</button>
          </div>
          <div className='h-[400px] w-[300px] bg-red-500 transition-transform duration-300 hover:scale-110 cursor-pointer '> 
            <Image src={studio} alt="" className="relative"/>
            <div className="absolute top-12 px-4">
              <p className="text-white font-Josefin_Sans font-bold">Explore</p>
              <h1 className="text-white text-3xl font-poppins-bold font-bold w-1/2">Portarit Photography</h1>
            </div>
            <button className="py-3 px-5 bg-white text-black font-Josefin_Sans shadow-sm absolute bottom-3 mx-4 rounded-full">Explore More</button>
          </div>
          <div className='h-[400px] w-[300px] bg-green-500 transition-transform duration-300 hover:scale-110 cursor-pointer '> 
            <Image src={event} alt="" className="relative"/>
            <div className="absolute top-12 px-4">
              <p className="text-white font-Josefin_Sans font-bold">Explore</p>
              <h1 className="text-white text-3xl font-poppins-bold font-bold w-1/2">Portarit Photography</h1>
            </div>
            <button className="py-3 px-5 bg-white text-black font-Josefin_Sans shadow-sm absolute bottom-3 mx-4 rounded-full">Explore More</button>
          </div>
          <div className='h-[400px] w-[300px] bg-purple-500 transition-transform duration-300 hover:scale-110 cursor-pointer'></div>
          <div className='h-[400px] w-[300px] bg-black transition-transform duration-300 hover:scale-110 cursor-pointer'></div>
          <div className='h-[400px] w-[300px] bg-orange-500 transition-transform duration-300 hover:scale-110 cursor-pointer'></div>
          <div className='h-[400px] w-[300px] bg-blue-500 transition-transform duration-300 hover:scale-110 cursor-pointer'>
            <Image src={portrait} alt="" className="relative"/>
            <div className="absolute top-12 px-4">
              <p className="text-white font-Josefin_Sans font-bold">Explore</p>
              <h1 className="text-white text-3xl font-poppins-bold font-bold w-1/2">Portarit Photography</h1>
            </div>
            <button className="py-3 px-5 bg-white text-black font-Josefin_Sans shadow-sm absolute bottom-3 mx-4 rounded-full">Explore More</button>
          </div>
          <div className='h-[400px] w-[300px] bg-blue-500 transition-transform duration-300 hover:scale-110 cursor-pointer '> 
            <Image src={studio} alt="" className="relative"/>
            <div className="absolute top-12 px-4">
              <p className="text-white font-Josefin_Sans font-bold">Explore</p>
              <h1 className="text-white text-3xl font-poppins-bold font-bold w-1/2">Portarit Photography</h1>
            </div>
            <button className="py-3 px-5 bg-white text-black font-Josefin_Sans shadow-sm absolute bottom-3 mx-4 rounded-full">Explore More</button>
          </div>
          <div className='h-[400px] w-[300px] bg-green-500 transition-transform duration-300 hover:scale-110 cursor-pointer '> 
            <Image src={event} alt="" className="relative"/>
            <div className="absolute top-12 px-4">
              <p className="text-white font-Josefin_Sans font-bold">Explore</p>
              <h1 className="text-white text-3xl font-poppins-bold font-bold w-1/2">Portarit Photography</h1>
            </div>
            <button className="py-3 px-5 bg-white text-black font-Josefin_Sans shadow-sm absolute bottom-3 mx-4 rounded-full">Explore More</button>
          </div>
          <div className='h-[400px] w-[300px] bg-purple-500 transition-transform duration-300 hover:scale-110 cursor-pointer'></div>
          <div className='h-[400px] w-[300px] bg-black transition-transform duration-300 hover:scale-110 cursor-pointer'></div>
          <div className='h-[400px] w-[300px] bg-orange-500 transition-transform duration-300 hover:scale-110 cursor-pointer'></div>   
        </div>
      </div>
    </div>
  );
}

export default Services;
