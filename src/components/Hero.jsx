import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[150px] relative hidden md:flex flex-row bg-black'>
      {/* background design */}
      <div className="w-16 h-full border-r border-gray-700"></div>
      <div className="w-72 h-full border-r border-gray-700"></div>
      <div className="w-72 h-full border-r border-gray-700"></div>
      <div className="w-72 h-full border-r border-gray-700"></div>
      <div className="w-72 h-full border-r border-gray-700"></div>
      {/* End of background design */}
      <div className='absolute w-full h-full flex items-center'>
        <div className="w-16 h-full"></div>
        <div className='w-72 h-full border-black flex flex-col md:flex-row justify-center items-center'>
          {/* Number */}
          <h1 className="text-xl md:text-4xl text-brown">
            250
          </h1>
          {/* Description */}
          <div className='w-full md:w-3/6 ml-2'>
            <h2 className="text-lg md:text-xl text-white">Lorem, ipsum dolor.</h2>
            <h2 className="text-lg md:text-xl text-white">Lorem, ipsum.</h2>
          </div>
        </div>
        <div className='w-72 h-full border-black flex flex-col md:flex-row justify-center items-center'>
          {/* Number */}
          <h1 className="text-xl md:text-4xl text-brown">
            20
          </h1>
          {/* Description */}
          <div className='w-full md:w-3/6 ml-2'>
            <h2 className="text-lg md:text-xl text-white">Lorem, ipsum dolor.</h2>
            <h2 className="text-lg md:text-xl text-white">Lorem, ipsum.</h2>
          </div>
        </div>
        <div className='w-72 h-full border-black flex flex-col md:flex-row justify-center items-center'>
          {/* Number */}
          <h1 className="text-xl md:text-4xl text-brown">
            110
          </h1>
          {/* Description */}
          <div className='w-full md:w-3/6 ml-2'>
            <h2 className="text-lg md:text-xl text-white">Lorem, ipsum dolor.</h2>
            <h2 className="text-lg md:text-xl text-white">Lorem, ipsum.</h2>
          </div>
        </div>
        <div className='w-72 h-full border-black flex flex-col md:flex-row justify-center items-center'>
          {/* Number */}
          <h1 className="text-xl md:text-4xl text-brown">
            50
          </h1>
          {/* Description */}
          <div className='w-full md:w-3/6 ml-2'>
            <h2 className="text-lg md:text-xl text-white">Lorem, ipsum dolor.</h2>
            <h2 className="text-lg md:text-xl text-white">Lorem, ipsum.</h2>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero