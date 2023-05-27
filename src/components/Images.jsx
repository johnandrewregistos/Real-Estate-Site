import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { data } from '../data/data'

const Images = () => {
  const [index1, setCurrentIndex1] = useState(0);
  const currentItem1 = data[index1];
  const [index2, setCurrentIndex2] = useState(4);
  const currentItem2 = data[index2];
  const [index3, setCurrentIndex3] = useState(9);
  const currentItem3 = data[index3];

  return (
    <div className='w-full h-screen flex flex-col md:flex-row justify-evenly items-center'>
      <Link to={`/Real-Estate-Site/type/${currentItem1.name}`} reloadDocument className="w-full md:w-2/6 h-2/6 md:h-full bg-black cursor-pointer">
        <div className='group overflow-hidden border-2 border-black/50 relative w-full h-full bg-black'>
          {/** overlay */}
          <div className='group-hover:bg-black/75 w-full h-full absolute z-40 transition-all duration-300'>
          </div>
          {/** img */}
          <img src={currentItem1.url} alt={currentItem1.title} className='w-full h-full group-hover:scale-125 transition-all duration-500' />
          {/** cursor */}
          <div className='w-20 h-20 hidden bg-black/40 rounded-full border border-black lg:flex justify-center items-center absolute -bottom-full left-44 group-hover:inset-y-64 transition-all duration-100 z-50'>
            <span className='text-4xl font-bold text-white'><AiOutlineSearch /></span>
          </div>
          {/** pretitle */}
          <div className='absolute -bottom-full left-12 group-hover:bottom-32 transition-all duration-500 z-50'>
            <span className='tracking-wider text-white'>Visit your Home</span>
          </div>
          {/** Title */}
          <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-700 z-50'>
            <span className='text-3xl text-brown tracking-widest'>Dormitories</span>
          </div>
        </div>
      </Link>
      <Link to={`/Real-Estate-Site/type/${currentItem2.name}`} reloadDocument className="w-full md:w-2/6 h-2/6 md:h-full bg-black cursor-pointer">
        <div className='group overflow-hidden border-2 border-black/50 relative w-full h-full bg-black'>
          {/** overlay */}
          <div className='group-hover:bg-black/75 w-full h-full absolute z-40 transition-all duration-300'>
          </div>
          {/** img */}
          <img src={currentItem2.url} alt={currentItem2.title} className='w-full h-full group-hover:scale-125 transition-all duration-500' />
          {/** cursor */}
          <div className='w-20 h-20 hidden bg-black/40 rounded-full border border-black lg:flex justify-center items-center absolute -bottom-full left-44 group-hover:inset-y-64 transition-all duration-100 z-50'>
            <span className='text-4xl font-bold text-white'><AiOutlineSearch /></span>
          </div>
          {/** pretitle */}
          <div className='absolute -bottom-full left-12 group-hover:bottom-32 transition-all duration-500 z-50'>
            <span className='tracking-wider text-white'>Visit your Place</span>
          </div>
          {/** Title */}
          <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-700 z-50'>
            <span className='text-3xl text-brown tracking-widest'>Appartments</span>
          </div>
        </div>
      </Link>
      <Link to={`/Real-Estate-Site/type/${currentItem3.name}`} reloadDocument className="w-full md:w-2/6 h-2/6 md:h-full bg-black cursor-pointer">
        <div className='group overflow-hidden border-2 border-black/50 relative w-full h-full bg-black'>
          {/** overlay */}
          <div className='group-hover:bg-black/75 w-full h-full absolute z-40 transition-all duration-300'>
          </div>
          {/** img */}
          <img src={currentItem3.url} alt={currentItem3.title} className='w-full h-full group-hover:scale-125 transition-all duration-500' />
          {/** cursor */}
          <div className='w-20 h-20 hidden bg-black/40 rounded-full border border-black lg:flex justify-center items-center absolute -bottom-full left-44 group-hover:inset-y-64 transition-all duration-100 z-50'>
            <span className='text-4xl font-bold text-white'><AiOutlineSearch /></span>
          </div>
          {/** pretitle */}
          <div className='absolute -bottom-full left-12 group-hover:bottom-32 transition-all duration-500 z-50'>
            <span className='tracking-wider text-white'>Visit your unit</span>
          </div>
          {/** Title */}
          <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-700 z-50'>
            <span className='text-3xl text-brown tracking-widest'>Condominium</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Images
