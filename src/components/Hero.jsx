import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[150px] relative flex flex-row bg-black'>
      {/* background design */}
      <div className="w-16 h-full border-r border-gray-700"></div>
      <div className="w-72 h-full border-r border-gray-700"></div>
      <div className="w-72 h-full border-r border-gray-700"></div>
      <div className="w-72 h-full border-r border-gray-700"></div>
      <div className="w-72 h-full border-r border-gray-700"></div>
      {/* End of background design */}
      <div className='absolute w-full h-full flex items-center'>
      <div className="w-16 h-full"></div>
        <div className='w-72 h-full border-black flex justify-center items-center'>
          {/* Number */}
            <h1 className="text-4xl text-brown">
              250
            </h1>
          {/* Description */}
          <div className='w-3/6 ml-2'>
            <h2 className="text-xl text-white">Lorem, ipsum dolor.</h2>
            <h2 className="text-xl text-white">Lorem, ipsum.</h2>
          </div>
        </div>
        <div className='w-72 h-full border-black flex justify-center items-center'>
          {/* Number */}
            <h1 className="text-4xl text-brown">
              20
            </h1>
          {/* Description */}
          <div className='w-3/6 ml-2'>
            <h2 className="text-xl text-white">Lorem, ipsum dolor.</h2>
            <h2 className="text-xl text-white">Lorem, ipsum.</h2>
          </div>
        </div>
        <div className='w-72 h-full border-black flex justify-center items-center'>
          {/* Number */}
            <h1 className="text-4xl text-brown">
              110
            </h1>
          {/* Description */}
          <div className='w-3/6 ml-2'>
            <h2 className="text-xl text-white">Lorem, ipsum dolor.</h2>
            <h2 className="text-xl text-white">Lorem, ipsum.</h2>
          </div>
        </div>
        <div className='w-72 h-full border-black flex justify-center items-center'>
          {/* Number */}
            <h1 className="text-4xl text-brown">
              50
            </h1>
          {/* Description */}
          <div className='w-3/6 ml-2'>
            <h2 className="text-xl text-white">Lorem, ipsum dolor.</h2>
            <h2 className="text-xl text-white">Lorem, ipsum.</h2>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Hero