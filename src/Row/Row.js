import React, {useState, useEffect} from "react";
import axios from "axios";
import './Row.css'
import {IMAGE_BASE_URL} from "../requests";


const Row = ({title, fetchUrl, isLargeRow}) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            // console.log('Request...', request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])

    // console.log('Movies...', movies)

    return (
        <div className='row'>
            <h2 className='title'>{title}</h2>
            <div className='row_posters'>
                {movies.map((movie) => (
                        <img className={`row_poster ${isLargeRow && 'row_posterLarge'}`} key={movie.id}
                             src={`${IMAGE_BASE_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                             alt={movie.original_title}/>
                    )
                )}
            </div>
        </div>
    )
}

export default Row;