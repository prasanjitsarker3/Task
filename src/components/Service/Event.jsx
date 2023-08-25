import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FcOvertime } from "react-icons/fc";

const Event = () => {
    const [events, setEvent] = useState([])
    useEffect(() => {
        fetch("event.json")
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [])
    return (
        <div className='py-24'>
            <div className='grid md:grid-cols-3 gap-8 px-12'>
                {
                    events.map((event, index) =>
                        <div key={event.id} className='mx-auto  px-2 py-3  rounded-md shadow-md '>
                            <div className='card w-[320px] h-[260px] '>
                                <img src={event.images.mainImage} alt="" srcset="" className='md:w-[350px] h-[280px]' />
                                <div className='card-body h-full w-full top-0 py-2'>
                                    <h1 className='card-title uppercase font-bold  text-teal-500 text-center!'>{event.name}</h1>
                                    <h1 className='capitalize text-xl font-light text-white'>{event.title}</h1>
                                    <h1 className='card-info text-left text-white'>Eventful Endeavors streamlining Event Management Processes.Mastering Moments A Comprehensive Event </h1>
                                    <button className='card-btn p-3 rounded-md capitalize border-none outline-none cursor-pointer font-semibold leading-5'>{event.events} Event</button>
                                </div>
                            </div> 
                            <p className='text-center text-xl font-semibold'>{event.name}</p>
                            <div > 
                                <div className='flex justify-between  items-center'>
                                    <p className='text-lg flex items-center gap-1'> <FaMapMarkerAlt className='text-cyan-500'></FaMapMarkerAlt>{event.location}</p>
                                    <p className='text-lg'>{event.privacy}</p>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <p className='text-lg flex items-center'><FcOvertime></FcOvertime>{event.date}</p>
                                    <img className='w-5 h-5 mr-2 cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png" alt="" />
                                </div>
                            </div>
                            <button className='bg-cyan-500 p-2 w-full text-white font-semibold text-lg hover:bg-teal-500 transition-all duration-1000 ease-in-out rounded-md mt-1'>Event Details</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Event;