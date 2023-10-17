import React, { useState, useEffect } from 'react';
import './Card1.css';

export default props => {
    const [data, setData] = useState({ studios: [] });

    useEffect(() => {
        fetch("https://tools.texoit.com/backend-java/api/movies/?projection=studios-with-win-count")
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);

    const firstThreeYears = data.studios.slice(0, 3); // Seleciona os três primeiros elementos

    return (
        <div>
            <h3>{props.title}</h3>
            {firstThreeYears.length > 0 ? ( // Verifica se há dados em 'firstThreeYears'
                <table>
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Winner Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {firstThreeYears.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.winCount}</td>
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
