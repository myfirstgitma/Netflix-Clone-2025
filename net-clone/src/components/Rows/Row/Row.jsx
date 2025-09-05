import React, { useState, useEffect } from 'react';
import axios from "../../../utils/axios";
import "./row.css";

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const base_url = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        // Define and immediately call the async function
        const fetchData = async () => {
            try {
                setLoading(true);
                const request = await axios.get(fetchUrl);
                console.log("API Response:", request.data); // Debug log
                setMovies(request.data.results || []);
            } catch (error) {
                console.error("Error fetching data:", error);
                setMovies([]); // Set empty array on error
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [fetchUrl]); // Add fetchUrl as dependency

    if (loading) {
        return (
            <div className="row">
                <h2>{title}</h2>
                <div className="row__loading">Loading...</div>
            </div>
        );
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name || movie.title}
                    />
                ))}
            </div>
        </div>
    );
};

export default Row;