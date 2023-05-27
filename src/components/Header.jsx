import React from 'react'
import '../index.css'
import { BsBox } from 'react-icons/bs';
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <div className='w-8 md:w-16 h-full bg-black flex flex-col items-center'>
      <span className='text-white text-lg md:text-2xl mx-5 mt-3 md:mt-6 hover:text-brown'><BsBox /></span>
      <div className="h-full flex flex-col justify-evenly items-center">

        <ul className="h-64 flex flex-col justify-between items-center">
          <Link to='contact' activeClass='active' smooth={true} spy={true} offset={-200} className='text-[#3b3939] hover:text-brown -rotate-90 cursor-pointer tracking-widest text-base md:text-lg'>Contact</Link>
          <Link to='house' activeClass='active' smooth={true} spy={true} className='text-[#3b3939] hover:text-brown -rotate-90 cursor-pointer tracking-widest text-base md:text-lg '>Houses</Link>
          <Link to='home' activeClass='active' smooth={true} spy={true} className='text-white hover:text-brown -rotate-90 cursor-pointer tracking-widest text-base md:text-lg'>Landing</Link>
        </ul>
      </div>
    </div>
  )
}

export default Header