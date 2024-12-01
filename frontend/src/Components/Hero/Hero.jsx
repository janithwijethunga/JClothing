import React from 'react'
import rightarrow from '../Assets/rightarrow.png'
import fashiongirl from '../Assets/fashiongirl.png'

function Hero() {
  return (
    //hero
    <div className='flex h-[626px] bg-gradient-to-r from-jred '>
      {/* hero-left */}
      <div className='flex flex-1 flex-col justify-center gap-5 pl-40 leading-relaxed'>
        <h1 className='font-poppins text-black text-7xl font-semibold'>NEW ARRIVALS ONLY</h1>
        <div>
          <div>
            <p className='text-black text-6xl font-p font-semibold'>New</p>
          </div>
          <p className='text-black text-6xl font-poppins font-semibold'>Collections</p>
          <p className='text-black text-6xl font-poppins font-semibold'>For Everyone</p>
        </div>
        {/* hero latest button */}
        <div className="flex justify-center items-center gap-4 w-[250px] h-[70px] rounded-full mt-16 bg-amber-800 opacity-70">
          <div className=" text-white font-poppins">Latest Collection</div>
          <img src={rightarrow} alt="right arrow girl" />
        </div>
      </div>
      {/* hero right */}
      <div>
        <img src={fashiongirl} alt="fashion girl" className='size-full '/>
      </div>
    </div>
  )
}

export default Hero
