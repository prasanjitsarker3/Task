import { Rating } from '@smastrom/react-rating';
import React, { useEffect, useState } from 'react';
import '@smastrom/react-rating/style.css'

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("products.json") 
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])
    return (
        <div>
            <h1 className='text-center text-2xl py-5'>All Products Section</h1>
            <div className='grid md:grid-cols-3 gap-5 '>
                {
                    products.map(product => <div key={product} className="card w-96 bg-base-100 mx-auto shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={product.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{product.name}</h2>
                            <p>{product.title}</p>
                            <div className='flex justify-between gap-10 items-center'>
                                <p>Price: {product.price}</p>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={product.rating}
                                    readOnly
                                />
                            </div>

                            <div className="card-actions w-full">
                                <button className="btn btn-primary w-full ">Buy Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Home;