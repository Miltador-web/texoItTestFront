import React, { useState, useEffect } from 'react';
import './Card1.css';

export default props => {
    const [year, setYear] = useState(''); // Inicialize com uma string vazia
    const [data, setData] = useState([]);

    useEffect(() => {
        if (year.trim() === '') {
            setData([]); // Limpa os dados se o ano estiver em branco
            return;
        }

        fetch(`https://tools.texoit.com/backend-java/api/movies/?winner=true&year=${year}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, [year]);

    const handleYearChange = (e) => {
        setYear(e.target.value);
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <input
                type="text"
                placeholder="Search by year"
                value={year}
                onChange={handleYearChange}
            />
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Year</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.year}</td>
                                <td>{item.title}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    );
}
