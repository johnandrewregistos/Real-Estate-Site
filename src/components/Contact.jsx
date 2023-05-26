import React from 'react'
import Footer from './Footer'
import { AiOutlineMail } from 'react-icons/ai'
import { BiPhoneCall } from 'react-icons/bi'

const Contact = () => {
  return (
    <>
      <section className="text-white body-font bg-black/90 relative" id='contact'>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-brown">Contact Us</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed tracking-wide text-white text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-brown tracking-wider">Name</label>
                  <input type="text" id="name" name="name" className="w-full bg-white bg-opacity-40 rounded border border-white focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-brown tracking-wider">Email</label>
                  <input type="email" id="email" name="email" className="w-full bg-white bg-opacity-40 rounded border border-white focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-brown tracking-wider">Message</label>
                  <textarea id="message" name="message" className="w-full bg-white bg-opacity-40 rounded border border-white focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white tracking-wider bg-brown border-0 py-2 px-8 focus:outline-none hover:bg-[#ddc040] rounded text-lg">SEND</button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 flex justify-evenly">
                <a href='mailto:xyzteam@gmail.com' className="text-brown flex justify-center items-center"><AiOutlineMail className='text-2xl mr-3' /> xyzteam@email.com</a>
                <a className="text-brown flex justify-center items-center"><BiPhoneCall className='text-2xl mr-3' /> +123-4567-789</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact