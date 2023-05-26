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
                    <div className="container h-full flex flex-col mx-auto ">
                        <div className="container h-[550px] mt-8 flex flex-row justify-between items-center px-8 mx-auto">
                            {/* Image */}
                            <div className='w-3/5 h-[500px]'>
                                <img className='w-full h-[400px]' src={item?.url} alt={item?.title} id='image' />
                            </div>
                            {/* Text */}
                            <div className='w-2/6 h-[500px] pl-10'>
                                <h2 className="text-2xl text-brown">{item?.id}</h2>
                                <div className='relative w-5/6 flex justify-start items-center'>
                                    <h1 className="absolute text-4xl text-white tracking-widest">{item?.title}</h1>
                                    <h1 className="text-[4rem] text-[#313030] leading-10 tracking-widest ml-6">{item?.title}</h1>
                                </div>
                                <div className='w-full pl-16 my-8'>
                                    <h3 className='text-white text-md tracking-wider'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nostrum accusamus, delectus nesciunt eligendi porro, voluptate aliquam a eius quam aperiam. Consequuntur, similique nesciunt quasi eveniet rerum fugiat sint maxime mollitia. Harum reprehenderit sequi non veniam nihil delectus! Rerum veniam aut dolorum vitae. </h3>
                                </div>
                                <p className="text-brown text-lg tracking-wide mb-3">$ <span className="text-white">{item?.price}</span>/month</p>
                                <Link to='contact' activeClass='active' smooth={true} spy={true} className='w-40 flex items-end text-white hover:text-brown tracking-wider cursor-pointer'>Buy this House. <FaLongArrowAltRight className='ml-2' /></Link>
                            </div>
                        </div>
                        <div className="w-full h-[150px] flex justify-evenly items-center -mt-24">
                            <a onClick={() => handleImageChange()} className='group overflow-hidden border-2 border-black/50 relative w-[160px] h-full bg-black'>
                                {/** img */}
                                <img src={item?.url} alt="" className='w-[160px] h-[130px] cursor-pointer rounded-xl' />
                                {/** pretitle */}
                                <div className='absolute w-full flex justify-center -bottom-full left-0 group-hover:bottom-4 group-hover:bg-black/75 transition-all duration-500 z-50'>
                                    <span className='tracking-wider text-white '>Home</span>
                                </div>
                            </a>
                            <a onClick={() => handleImageChange()} className='group overflow-hidden border-2 border-black/50 relative w-[160px] h-full bg-black'>
                                {/** img */}
                                <img src={item?.url1} alt="" className='w-[160px] h-[130px] cursor-pointer rounded-xl' />
                                {/** pretitle */}
                                <div className='absolute w-full flex justify-center -bottom-[130px] left-0 group-hover:bottom-4 group-hover:bg-black/75 transition-all duration-500 z-50'>
                                    <span className='tracking-wider text-white '>Dinning Area</span>
                                </div>
                            </a>
                            <a onClick={() => handleImageChange()} className='group overflow-hidden border-2 border-black/50 relative w-[160px] h-full bg-black'>
                                {/** img */}
                                <img src={item?.url2} alt="" className='w-[160px] h-[130px] cursor-pointer rounded-xl' />
                                {/** pretitle */}
                                <div className='absolute w-full flex justify-center -bottom-[130px] left-0 group-hover:bottom-4 group-hover:bg-black/75 transition-all duration-500 z-50'>
                                    <span className='tracking-wider text-white '>Kitchen Area</span>
                                </div>
                            </a>
                            <a onClick={() => handleImageChange()} className='group overflow-hidden border-2 border-black/50 relative w-[160px] h-full bg-black'>
                                {/** img */}
                                <img src={item?.url3} alt="" className='w-[160px] h-[130px] cursor-pointer rounded-xl' />
                                {/** pretitle */}
                                <div className='absolute w-full flex justify-center -bottom-[130px] left-0 group-hover:bottom-4 group-hover:bg-black/75 transition-all duration-500 z-50'>
                                    <span className='tracking-wider text-white '>Living Area</span>
                                </div>
                            </a>
                            <a onClick={() => handleImageChange()} className='group overflow-hidden border-2 border-black/50 relative w-[160px] h-full bg-black'>
                                {/** img */}
                                <img src={item?.url4} alt="" className='w-[160px] h-[130px] cursor-pointer rounded-xl' />
                                {/** pretitle */}
                                <div className='absolute w-full flex justify-center -bottom-[130px] left-0 group-hover:bottom-4 group-hover:bg-black/75 transition-all duration-500 z-50'>
                                    <span className='tracking-wider text-white '>Bed Room</span>
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