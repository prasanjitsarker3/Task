import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from './Service/actions/counterAction';

const CounterApp = () => {
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(incrementCounter());
    }

    const handleDecrement = () => {
        dispatch(decrementCounter());
    }
    const handleReset=()=>{
        dispatch(resetCounter());
    }
    return (
        <div className='text-center'>
            <h1 className='text-lg'>Counter Information section</h1>
            <h2 className='text-xl py-3'>Count : {count}</h2>

            <div className='flex justify-center gap-5'>
                <button onClick={handleIncrement} className='btn btn-primary'>Increment</button>
                <button onClick={handleReset} className="btn btn-primary">RESET</button>
                <button onClick={handleDecrement} className='btn btn-primary'>Decrement</button>
            </div>
        </div>
    );
};

export default CounterApp;