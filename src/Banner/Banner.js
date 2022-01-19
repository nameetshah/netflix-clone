import React, {useEffect, useState} from "react";
import axios from "axios";
import {requests, IMAGE_BASE_URL} from "../requests";
import './Banner.css'

const Banner = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(requests.fetchNetflixOriginals);
            console.log('dfsdfsdf', request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
            return request;
        }
        fetchData();
    }, [])

    console.log('movieeeeeeee', movie)

    return (
        <header className='banner'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url(${IMAGE_BASE_URL}${movie?.backdrop_path})`,
                    backgroundPosition: 'center center'
                }}
        >
            <div className='banner_contents'>
                <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_title || movie?.original_name}</h1>
                <div className='banner_buttons'>
                    <button className='banner_button'>My List</button>
                    <button className='banner_button'>Play</button>
                </div>
                <h1 className='banner_description'>{movie?.overview}</h1>
            </div>
            <div className='banner_fadeEffect'/>
        </header>
    )
}

export default Banner;