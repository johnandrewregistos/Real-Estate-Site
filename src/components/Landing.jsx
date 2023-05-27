import React from 'react'
import Header from './Header'
import { Link } from 'react-scroll'

const Landing = () => {
  return (
    <div className="w-full h-screen flex flex-row" id='home'>
      <Header />
      <div className="w-full h-full ml-0 bg-mainBg bg-no-repeat bg-cover bg-center">
        <div className="w-full h-full bg-black/60">
          <div className="w-full pl-3 md:pl-7 pt-[0.65rem] md:pt-6">
            <h1 className="text-lg md:text-xl text-white tracking-widest">XYZ team</h1>
          </div>
          <div className="w-full h-full flex flex-row">
            {/* Text */}
            <div className='w-full lg:w-3/6 h-5/6 ml-10 lg:ml-24 flex flex-col justify-center items-start'>
              <h1 className="text-[1.50rem] md:text-[3rem] leading-10 text-white font-medium">You can find your <span className="text-brown">home</span> here. <br /> be one <span className="text-brown">of wonderfull people</span> inside!</h1>
              <Link to='contact' activeClass='active' smooth={true} spy={true} className="w-24 md:w-32 flex justify-center items-center px-1 md:px-2 py-1 md:py-3 mt-3 md:mt-5 bg-brown hover:bg-[#ddc040] text-white rounded-full tracking-wide md:tracking-widest cursor-pointer">Book Now</Link>
            </div>
            {/* Image */}
            <div className='w-3/6 h-5/6 py-6 hidden lg:flex justify-center items-center'>
              <img className='w-5/6 rounded-md' src="https://images.pexels.com/photos/4050387/pexels-photo-4050387.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Real Estate" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing