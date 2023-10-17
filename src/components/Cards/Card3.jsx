import React, { useState, useEffect } from 'react';
import './Cards.css';

export default props => {
    const [data, setData] = useState({ min: [], max:[]});

    useEffect(() => {
        fetch("https://tools.texoit.com/backend-java/api/movies/?projection=max-min-win-interval-for-producers")
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h3>{props.title}</h3>
            {data.min.length > 0 ? ( // Verifica se há dados na API
                <table>
                    <thead>
                        <h3 className='maxmin'>Maximum</h3>
                        <tr>
                            <th>Producer</th>
                            <th>Interval</th>
                            <th>Previous Year</th>
                            <th>Following Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.max.map((item, index) => (
                            <tr key={index}>
                                <td>{item.producer}</td>
                                <td>{item.interval}</td>
                                <td>{item.previousWin}</td>
                                <td>{item.followingWin}</td>
                            </tr>
                        ))}
                    </tbody>
                    <thead>
                    <h3 className='maxmin'>Minimum</h3>
                        <tr>
                            <th>Producer</th>
                            <th>Interval</th>
                            <th>Previous Year</th>
                            <th>Following Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.min.map((item, index) => (
                            <tr key={index}>
                                <td>{item.producer}</td>
                                <td>{item.interval}</td>
                                <td>{item.previousWin}</td>
                                <td>{item.followingWin}</td>
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
