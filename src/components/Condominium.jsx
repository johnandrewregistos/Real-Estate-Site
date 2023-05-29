import React, { useState, useEffect } from 'react'
import Contact from './Contact'
import Images from './Images'
import { useParams } from 'react-router-dom';
import { data } from '../data/data.js'
import { Link } from 'react-router-dom'



const Condominium = () => {
    const { name } = useParams()
    const [items, setItems] = useState([]);

    useEffect(() => {
        const selectedItem = data.filter((items) => items.name === name);
        setItems(selectedItem);
    }, [name]);

    if (items.length === 0) {
        return <div className='w-full h-screen flex justify-center items-center text-4xl'>Loading...</div>;
        // You can show a loading indicator while items are being fetched
    }

    return (
        <>
            <div className='w-full h-[1000px] md:h-screen relative flex flex-row bg-black' id='house'>
                {/* background design */}
                <div className="w-16 h-full border-r border-gray-700"></div>
                <div className="w-72 h-full border-r border-gray-700"></div>
                <div className="w-72 h-full border-r border-gray-700"></div>
                <div className="w-72 h-full border-r border-gray-700"></div>
                <div className="w-72 h-full border-r border-gray-700"></div>
                {/* End of background design */}

                <div className="absolute w-full h-full px-6 md:px-24 ">
                    <h2 className="w-full my-3 md:my-6 flex justify-center text-white text-xl md:text-3xl tracking-wider">Choose from your comfortzone</h2>
                    <div className='w-full px-2 md:px-6 text-white grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {items.map((item) => (
                            <div key={item.id} className="w-full md:w-[300px] lg:w-[500px] h-[220px] md:h-[250px] mx-auto mb-0 lg:mb-2">
                                <Link to={`/Real-Estate-Site/unit/${item.id}`} reloadDocument>
                                    <img alt={item.title} className="w-full md:w-[300px] lg:w-[500px] h-[180px] md:h-[220px] object-cover object-center block" src={item.url} />
                                </Link>
                                <div className="mt-2 w-full flex justify-between items-center">
                                    <h3 className="text-white text-xs tracking-widest title-font mb-1">{item.name}</h3>
                                    <h2 className="text-brown title-font text-lg font-medium">{item.title}</h2>
                                    <p className="mt-1 text-white">$ {item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
            <Images />
            <Contact />
        </>
    )
}

export default Condominium