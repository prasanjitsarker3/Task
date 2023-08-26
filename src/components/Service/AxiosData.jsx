import React, { useEffect, useState } from 'react';
import axios from './axios';
const AxiosData = () => {
    const [data, setData]=useState([])
    const getApiData = async () => {
        try {
            const res = await axios.get("/users")
            setData(res.data)
        }
        catch (error) {
            console.log(error.message);
        }
    }
    useEffect(()=>{
        getApiData()
    },[])
    return (
        <div>
            <h1 className='text-center text-lg'>Fetching data with axios:{data.length}</h1>
        </div>
    );
};

export default AxiosData;