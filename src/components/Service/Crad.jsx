import React, { useEffect, useState } from 'react';
import { FaCheck } from "react-icons/fa";
import Event from './Event';
const Crad = () => {
    const [card, setCard] = useState([]);
    useEffect(() => {
        fetch('price.json')
            .then(res => res.json())
            .then(data => setCard(data))

    }, [])
    console.log("Price data", card);
    return (
        <div>
            <div className='grid md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8'>
                {
                    card.map(price =>
                        <div key={price.id} className={`relative border ${price.mostPopular ? "bg-cyan-600 text-white" : " bg-white hover:bg-cyan-500  hover:text-white transition-all duration-1000 ease-in-out my-8"} border-slate-200  shadow-lg rounded-2xl p-5 flex flex-col`}>
                            <div className='flex p-3 gap-12'>
                                <img src={price.image} alt="" className='w-12 h-12 rounded-full ' />
                                <div>
                                    <p className='text-xl  font-semibold leading-5'>{price.tier}</p>
                                    <p className='text-lg leading-6 font-serif'>{price.title}</p>
                                </div>
                            </div>
                            {
                                price.mostPopular && <p className='absolute top-0 -translate-y-1/2 bg-cyan-500 px-3 py-0.5 text-white text-lg rounded-full shadow-md   tracking-wide'>Most Popular</p>
                            }
                            <p className='text-lg py-2'>{price.description}</p>
                            <p className={` ${price.mostPopular ? "  text-white" : ""} text-lg   p-1  rounded flex items-center`}><span className='text-3xl font-semibold'>${price.price}</span>/monthly</p>

                            <div className='mt-3 space-y-2'>
                                {
                                    price.features.map(feature =>
                                        <div key={feature.id} className='flex items-center gap-5 flex-1'>
                                            <FaCheck className={`${price.mostPopular ? "text-white" : " text-cyan-600 "}`} />
                                            <li className={`'text-base ${price.mostPopular ? "text-white" : " hover:text-white"} leading-6'`} > {feature}</li>
                                        </div>
                                    )
                                }
                            </div>
                            <div className='pt-2 mt-auto'>
                                <button className={` ${price.mostPopular ? "text-white bg-cyan-500 hover:bg-cyan-700 " : " text-cyan-700 bg-cyan-100 hover:bg-cyan-200"
                                    }  w-full p-3 rounded-md text-lg font-semibold mt-auto`}>Choose Plan</button>
                            </div>
                        </div>)
                }
            </div>
            <Event></Event>
        </div>
    );
};

export default Crad; 