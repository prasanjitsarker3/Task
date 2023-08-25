import { useEffect, useState } from "react";

const CounterApp = () => {
    const [students, setStudent] = useState([]);
    const [searchTerm, setSearchTerm]=useState("");
    const [newSearchTerm, setNewSearchTerm]=useState([]);
    useEffect(() => {
        fetch("student.json")
            .then(res => res.json())
            .then(data => setStudent(data))
    })
    const handleSearch = () => {
        const search= students.filter(student => student.name.toLowerCase().includes(searchTerm.toLowerCase()) )
        setNewSearchTerm(search)
    }
    return (
        <div className="text-center">
            <h1>Student Length: {students.length}</h1>
            <input
                type="text"
                placeholder="Search by name"
                className="border p-3 "
                value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleSearch}> Search</button>


            <div>
                <ul>
                    {newSearchTerm.map(student => (
                        <li key={student.id}>
                            {student.name} - Class: {student.class} - Roll: {student.roll}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CounterApp;