import React, { useEffect, useState } from 'react';

const Search = () => {
    const [trainsData, setTrainsData] = useState([]);
    const [departureStation, setDepartureStation] = useState('');
    const [arrivalStation, setArrivalStation] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        fetch("search.json")
            .then(res => res.json())
            .then(data => setTrainsData(data.trains))
    }, [])

    const handleSearch = () => {
        const results = trainsData.filter(
            (train) =>
                train.departure_station.toLowerCase() === departureStation.toLowerCase() &&
                train.arrival_station.toLowerCase() === arrivalStation.toLowerCase()
        );
        setSearchResults(results);
    };
    return (
        <div className="container mx-auto py-8">
            <div className="md:flex justify-center items-center">
                <div className='w-1/2'>
                    <label htmlFor="departureStation" className="block mb-2 font-medium text-gray-700">
                        Departure Station
                    </label>
                    <input
                        type="text"
                        // This is Heder file commmands
                        id="departureStation" 
                        className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-500 focus:outline-none"
                        value={departureStation}
                        onChange={(e) => setDepartureStation(e.target.value)}
                    />
                </div>
                <div className='w-1/2'>
                    <label htmlFor="arrivalStation" className="block mb-2 font-medium text-gray-700">
                        Arrival Station
                    </label>
                    <input
                        type="text"
                        id="arrivalStation"
                        className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-500 focus:outline-none"
                        value={arrivalStation}
                        onChange={(e) => setArrivalStation(e.target.value)}
                    />
                </div>
            </div>

            <button
                className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
                onClick={handleSearch}
            >
                Search
            </button>

            {searchResults.length > 0 && (
                <div className="mt-8">
                    <h2 className="text-xl font-medium mb-4">Search Results:</h2> 
                    <ul>
                        {searchResults.map((train, index) => (
                            <li key={index} className="mb-2">
                                Train Number: {train.train_number}, Departure Time: {train.departure_time}, Arrival Time: {train.arrival_time}, Price: {train.price}, Available Seats: {train.available_seats}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Search;