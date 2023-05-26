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
            <div className="w-full px-8 py-3 flex justify-between items-center">
              <div className='w-3/6 flex justify-around items-center'>
                <h2 className="text-brown font-medium">Type: <span className='text-white'>{currentItem.name}</span></h2>
                <h2 className="text-brown font-medium">name: <span className='text-white'>{currentItem.title}</span></h2>
                <h2 className="text-brown font-medium">capacity: <span className='text-white'>{currentItem.capacity}</span></h2>
                <h2 className="text-brown font-medium">price: <span className='text-white'>${currentItem.price}</span></h2>
              </div>
              <div className="w-1/6 flex justify-evenly items-center">
                <div>
                  <button className='text-white hover:text-brown text-3xl font-bold mr-1' onClick={() => handlePrev()}><FaLongArrowAltLeft /></button>
                  <button className='text-white hover:text-brown text-3xl font-bold' onClick={() => handleNext()}><FaLongArrowAltRight /></button>
                </div>
                <h1 className="text-2xl text-white"><span className="text-4xl">{currentItem.id}</span>/12</h1>
              </div>
            </div>
            {/*  */}
            <div className="w-full h-[600px] flex flex-row justify-between items-center">
              {/* Text */}
              <div className='w-2/6 h-[400px] pl-10'>
                <h2 className="text-2xl text-brown">{currentItem.id}</h2>
                <div className='relative w-5/6 flex justify-start items-center'>
                  <h1 className="absolute text-4xl text-white tracking-widest">{currentItem.title}</h1>
                  <h1 className="text-[4rem] text-[#313030] leading-10 tracking-widest ml-6">{currentItem.title}</h1>
                </div>
                <div className='w-full pl-16 my-8'>
                  <h3 className='text-white text-md tracking-wider'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nostrum accusamus, delectus nesciunt eligendi porro, voluptate aliquam a eius quam aperiam. Consequuntur, similique nesciunt quasi eveniet rerum fugiat sint maxime mollitia. Harum reprehenderit sequi non veniam nihil delectus! Rerum veniam aut dolorum vitae. </h3>
                </div>
                <Link to='/Contact/' className='w-40 flex items-end text-white hover:text-brown tracking-wider'>View My House. <FaLongArrowAltRight className='ml-2' /></Link>
              </div>
              {/* Image */}
              <Link to={`/Real-Estate-Site/unit/${currentItem.id}`} className='w-3/5 h-[500px]'>
                <img className='w-full h-full' src={currentItem.url} alt="" />
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