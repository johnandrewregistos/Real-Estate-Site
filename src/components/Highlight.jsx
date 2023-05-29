import React, { useState } from 'react'
import Hero from './Hero'
import { FaLongArrowAltRight, FaLongArrowAltLeft } from 'react-icons/fa'
import { data } from '../data/data'
import { Link } from 'react-router-dom'

const Highlight = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = data[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };


  return (
    <>
      <div className='w-full h-screen relative flex flex-row bg-black' id='house'>
        {/* background design */}
        <div className="w-16 h-full border-r border-gray-700"></div>
        <div className="w-72 h-full border-r border-gray-700"></div>
        <div className="w-72 h-full border-r border-gray-700"></div>
        <div className="w-72 h-full border-r border-gray-700"></div>
        <div className="w-72 h-full border-r border-gray-700"></div>
        {/* End of background design */}

        <div className="absolute w-full h-full flex">
          <div key={currentItem.id} className="container mx-auto ">
            {/* Top Part */}
            <div className="w-full px-8 py-3 flex flex-col-reverse lg:flex-row justify-between items-center">
              <div className='w-full lg:w-3/6 flex justify-around items-center'>
                <div className="w-3/6 flex flex-col md:flex-row justify-between items-baseline mr-0 sm:mr-12">
                  <h2 className="text-brown font-medium">Type: <span className='text-white'>{currentItem.name}</span></h2>
                  <h2 className="text-brown font-medium">price: <span className='text-white'>${currentItem.price}</span></h2>
                </div>
                <div className="w-3/6 flex flex-col md:flex-row justify-between items-baseline">
                  <h2 className="text-brown font-medium">capacity: <span className='text-white'>{currentItem.capacity}</span></h2>
                  <h2 className="text-brown font-medium">name: <span className='text-white'>{currentItem.title}</span></h2>
                </div>
              </div>
              <div className="w-full md:w-1/6 flex justify-end items-center">
                <div className='mr-2 lg:mr-0'>
                  <button className='text-white hover:text-brown text-xl lg:text-3xl font-bold mr-1' onClick={() => handlePrev()}><FaLongArrowAltLeft /></button>
                  <button className='text-white hover:text-brown text-xl lg:text-3xl font-bold' onClick={() => handleNext()}><FaLongArrowAltRight /></button>
                </div>
                <h1 className="text-2xl text-white"><span className="text-4xl">{currentItem.id}</span>/12</h1>
              </div>
            </div>
            {/* Content of Data */}
            <div className="w-full h-[600px] flex flex-col-reverse lg:flex-row justify-between items-center">
              {/* Text */}
              <div className='w-full lg:w-2/6 h-[400px] px-4 lg:pl-10 mt-2 lg:mt-0'>
                <h2 className="text-2xl text-brown">{currentItem.id}</h2>
                <div className='relative w-5/6 flex justify-start items-center'>
                  <h1 className="absolute text-2xl lg:text-4xl text-white tracking-widest">{currentItem.title}</h1>
                  <h1 className="text-4xl lg:text-[4rem] text-[#313030] leading-10 tracking-wide md:tracking-widest ml-6">{currentItem.title}</h1>
                </div>
                <div className='w-full pl-8 md:pl-16 my-4 md:my-8'>
                  <h3 className='text-white text-sm lg:text-baseline tracking-wider'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nostrum accusamus, delectus nesciunt eligendi porro, voluptate aliquam a eius quam aperiam. Consequuntur, similique nesciunt quasi eveniet rerum fugiat sint maxime mollitia. </h3>
                </div>
                <Link to={`/Real-Estate-Site/unit/${currentItem.id}`} reloadDocument className='w-40 flex items-end text-white hover:text-brown tracking-wider'>View My House. <FaLongArrowAltRight className='ml-2' /></Link>
              </div>
              {/* Image */}
              <Link to={`/Real-Estate-Site/unit/${currentItem.id}`} reloadDocument className='w-full md:w-3/5 h-[300px] lg:h-[500px] px-2 md:px-0'>
                <img className='w-full h-[300px] lg:h-[500px]' src={currentItem.url} alt={currentItem.title} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Hero />
    </>
  )
}

export default Highlight
