import React, { useState, useEffect } from 'react'
import Contact from './Contact'
import Image from './Images'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { useParams } from 'react-router-dom';
import { data } from '../data/data'
import { Link } from 'react-scroll'

const Unit = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const selectedItem = data.find((item) => item.id === id);
        setItem(selectedItem);
    }, [id]);

    const handleImageChange = () => {
        const aImage = event.target.src
        let constImage = document.getElementById('image');

        constImage.setAttribute('src', aImage);
    };

    return (
        <>
            <div className='w-full h-screen relative flex flex-row bg-black'>
                {/* background design */}
                <div className="w-16 h-full border-r border-gray-700"></div>
                <div className="w-72 h-full border-r border-gray-700"></div>
                <div className="w-72 h-full border-r border-gray-700"></div>
                <div className="w-72 h-full border-r border-gray-700"></div>
                <div className="w-72 h-full border-r border-gray-700"></div>

                <div className="absolute w-full h-full flex">
                    <div className="container h-full flex flex-row md:flex-col mx-auto ">
                        <div className="w-5/6 md:w-full h-[550px] mt-8 flex flex-col md:flex-row justify-between items-center px-2 lg:px-8 ">
                            {/* Image */}
                            <div className='w-full md:w-3/5 h-[235px] md:h-[500px]'>
                                <img className='w-full h-[200px] md:h-[400px]' src={item?.url} alt={item?.title} id='image' />
                            </div>
                            {/* Text */}
                            <div className='w-full md:w-2/6 h-[500px] pl-1 md:pl-3 lg:pl-5'>
                                <h2 className="text-lg md:text-2xl text-brown mt-3 md:mt-0">{item?.id}</h2>
                                <div className='relative w-full lg:w-5/6 flex justify-start items-center'>
                                    <h1 className="absolute text-xl md:text-2xl lg:text-4xl text-white tracking-widest">{item?.title}</h1>
                                    <h1 className="text-2xl md:text-4xl lg:text-[4rem] text-[#313030] leading-10 tracking-widest ml-6">{item?.title}</h1>
                                </div>
                                <div className='w-full pl-4 md:pl-8 lg:pl-16 my-4 md:my-8'>
                                    <h3 className='text-white text-md tracking-wider'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nostrum accusamus, delectus nesciunt eligendi porro, voluptate aliquam a eius quam aperiam. Consequuntur, similique nesciunt quasi eveniet rerum fugiat sint maxime mollitia. </h3>
                                </div>
                                <p className="text-brown text-lg tracking-wide mb-3">$ <span className="text-white">{item?.price}</span>/month</p>
                                <Link to='contact' activeClass='active' smooth={true} spy={true} className='w-40 flex items-end text-white hover:text-brown tracking-wider cursor-pointer'>Buy this House. <FaLongArrowAltRight className='ml-2' /></Link>
                            </div>
                        </div>
                        <div className="w-1/6 md:w-full h-full md:h-[150px] flex flex-col md:flex-row justify-evenly items-center mt-0 md:-mt-24 pr-3">
                            <a onClick={() => handleImageChange()} className='group overflow-hidden border-2 border-black/50 relative w-[80px] md:w-[160px] h-[95px] md:h-full bg-black'>
                                {/** img */}
                                <img src={item?.url} alt={item?.title} className='w-[80px] md:w-[160px] h-[90px] md:h-[130px] cursor-pointer rounded-xl' />
                                {/** pretitle */}
                                <div className='absolute w-full flex justify-center -bottom-full left-0 group-hover:bottom-0 md:group-hover:bottom-4 group-hover:bg-black/75 transition-all duration-500 z-50'>
                                    <span className='tracking-wider text-white text-sm'>Home</span>
                                </div>
                            </a>
                            <a onClick={() => handleImageChange()} className='group overflow-hidden border-2 border-black/50 relative w-[80px] md:w-[160px] h-[95px] md:h-full bg-black'>
                                {/** img */}
                                <img src={item?.url1} alt={item?.title} className='w-[80px] md:w-[160px] h-[90px] md:h-[130px] cursor-pointer rounded-xl' />
                                {/** pretitle */}
                                <div className='absolute w-full flex justify-center -bottom-[130px] left-0 group-hover:bottom-0 md:group-hover:bottom-4 group-hover:bg-black/75 transition-all duration-500 z-50'>
                                    <span className='tracking-wider text-white text-sm'>Dinning Area</span>
                                </div>
                            </a>
                            <a onClick={() => handleImageChange()} className='group overflow-hidden border-2 border-black/50 relative w-[80px] md:w-[160px] h-[95px] md:h-full bg-black'>
                                {/** img */}
                                <img src={item?.url2} alt={item?.title} className='w-[80px] md:w-[160px] h-[90px] md:h-[130px] cursor-pointer rounded-xl' />
                                {/** pretitle */}
                                <div className='absolute w-full flex justify-center -bottom-[130px] left-0 group-hover:bottom-0 md:group-hover:bottom-4 group-hover:bg-black/75 transition-all duration-500 z-50'>
                                    <span className='tracking-wider text-white text-sm'>Kitchen Area</span>
                                </div>
                            </a>
                            <a onClick={() => handleImageChange()} className='group overflow-hidden border-2 border-black/50 relative w-[80px] md:w-[160px] h-[95px] md:h-full bg-black'>
                                {/** img */}
                                <img src={item?.url3} alt={item?.title} className='w-[80px] md:w-[160px] h-[90px] md:h-[130px] cursor-pointer rounded-xl' />
                                {/** pretitle */}
                                <div className='absolute w-full flex justify-center -bottom-[130px] left-0 group-hover:bottom-0 md:group-hover:bottom-4 group-hover:bg-black/75 transition-all duration-500 z-50'>
                                    <span className='tracking-wider text-white text-sm'>Living Area</span>
                                </div>
                            </a>
                            <a onClick={() => handleImageChange()} className='group overflow-hidden border-2 border-black/50 relative w-[80px] md:w-[160px] h-[95px] md:h-full bg-black'>
                                {/** img */}
                                <img src={item?.url4} alt={item?.title} className='w-[80px] md:w-[160px] h-[90px] md:h-[130px] cursor-pointer rounded-xl' />
                                {/** pretitle */}
                                <div className='absolute w-full flex justify-center -bottom-[130px] left-0 group-hover:bottom-0 md:group-hover:bottom-4 group-hover:bg-black/75 transition-all duration-500 z-50'>
                                    <span className='tracking-wider text-white text-sm'>Bed Room</span>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
            <Image />
            <Contact />
        </>
    )
}

export default Unit