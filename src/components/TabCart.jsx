import React from 'react';

const TabCart = ({ project }) => {
    return (
        <div className='grid md:grid-cols-3 gap-7'>
            {
                project.map(item => <div key={item} className="card w-96 bg-base-100 mx-auto shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={item.image} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{item.name}</h2>
                        
                    </div>
                </div>)
            }
        </div>
    );
};

export default TabCart;