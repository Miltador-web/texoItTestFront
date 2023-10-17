import React, { useState, useEffect } from 'react';
import '../components/Cards/Cards.css';
function MoviesList() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [year, setYear] = useState('');
    const [winner, setWinner] = useState('');
    const itemsPerPage = 15;
    const totalPages = 5;

    useEffect(() => {
        fetchMovies();
    }, [page, year, winner]);

    const fetchMovies = () => {
        let url = `https://tools.texoit.com/backend-java/api/movies`;

        if (year) {
            url += `?year=${year}`;
        } else {
            url += `?page=${page}&size=${itemsPerPage}`;

            if (winner) {
                url += `&year=${year}&winner=${winner}`;
            }
        }

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar filmes');
                }
                return response.json();
            })
            .then((data) => {
                // Ordena a lista de filmes por ordem crescente do ID
                data.content.sort((a, b) => a.id - b.id);
                setMovies(data.content);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const handleFirstPage = () => {
        setPage(1);
    };

    const handleLastPage = () => {
        setPage(totalPages);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={i === page ? 'active' : ''}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    return (
        <div className='list'>
            <div>
            </div>
            <div>
            </div>

            <table>
                <thead>
                    <h3>List movies</h3>
                    <tr>
                        <th>ID</th>
                        <th>
                            Ano
                            <input
                                type="text"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                            />
                        </th>

                        <th>Título</th>
                        <th>
                            Vencedor
                            <select value={winner} onChange={(e) => setWinner(e.target.value)}>
                                <option value="">Todos</option>
                                <option value="true">Sim</option>
                                <option value="false">Não</option>
                            </select>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie) => (
                        <tr key={movie.id}>
                            <td>{movie.id}</td>
                            <td>{movie.year}</td>
                            <td>{movie.title}</td>
                            <td>{movie.winner ? 'Sim' : 'Não'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="pagination">
                <button onClick={handleFirstPage}>Primeira</button>
                <button onClick={handlePreviousPage}>Anterior</button>
                {renderPageNumbers()}
                <button onClick={handleNextPage}>Próxima</button>
                <button onClick={handleLastPage}>Última</button>
            </div>
        </div>
    );
}

export default MoviesList;
