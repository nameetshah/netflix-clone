import React, {useState, useEffect} from "react";
import axios from "axios";
import './Row.css'
import {IMAGE_BASE_URL} from "../requests";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';


const Row = ({title, fetchUrl, isLargeRow}) => {

    const [movies, setMovies] = useState([]);

    const [trailerUrl, setTrailerUrl] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            // console.log('Request...', request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])

    const opts = {
        height: '500',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            let isTv = true;
            if (movie?.name) {
                isTv = false;
            }

            fetch(`https://api.themoviedb.org/3/${isTv ? 'movie' : 'tv'}/${movie.id}/videos?api_key=9d2bff12ed955c7f1f74b83187f188ae`)
                // movieTrailer(movie?.name || movie?.original_name || movie?.original_title || movie?.title)
                .then(res => res.json())
                .then(res => {
                    // const urlParams = new URLSearchParams(new URL(url).search);
                    // setTrailerUrl(urlParams.get('v'));
                    console.log('sdfsdfffffff', res)
                    setTrailerUrl(res.results[0].key);
                }).catch(e => console.log(e, 'sss'))
        }
    }

    // console.log('Movies...', movies)

    return (
        <div className='row'>
            <h2 className='title'>{title}</h2>
            <div className='row_posters'>
                {movies.map((movie) => (
                        <img className={`row_poster ${isLargeRow && 'row_posterLarge'}`} key={movie.id}
                             onClick={() => handleClick(movie)}
                             src={`${IMAGE_BASE_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                             alt={movie.original_title}/>
                    )
                )}
            </div>
            {trailerUrl &&
            <YouTube videoId={trailerUrl} opts={opts}/>
            }
        </div>
    )
}

export default Row;