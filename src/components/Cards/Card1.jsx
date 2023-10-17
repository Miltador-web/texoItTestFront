import React, { useState, useEffect } from 'react';
import './Card1.css';

export default props => {
    const [data, setData] = useState({ years: [] });

    useEffect(() => {
        fetch("https://tools.texoit.com/backend-java/api/movies/?projection=years-with-multiple-winners")
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h3>{props.title}</h3>
            {data.years.length > 0 ? ( // Verifica se há dados na API
                <table>
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Winner Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.years.map((item, index) => (
                            <tr key={index}>
                                <td>{item.year}</td>
                                <td>{item.winnerCount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
