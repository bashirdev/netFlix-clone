import React, { useEffect, useState } from 'react';
import './Banner.css'
import axios from './Axios'
import requests from './request'
const Banner = () => {

    const [movie, setMovie] = useState([])
    useEffect(()=>{
      const fetchData= async()=>{
          const request= await axios.get(requests.fetchNetFlixOrginals)
          setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)])
          return request
      }
      fetchData()
      setInterval(()=>{
        fetchData()
    },10000)
    },[])
 

    const truncateDesc= (str , n)=>{
        return str?.length > n ? str.substr(0, n-1) + '...':str
    }
    return (
        <header className='banner'
         style={{
             backgroundSize:"cover",
             backgroundImage:`url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
             backgroundPosition:'center center'
         }}
        >
            <div className="banner__contents">
                <h1 className='header__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className='banner_description'>{truncateDesc(movie?.overview, 100)}</h1>
            </div>

            <div className="banner__fadeBottom"></div>
        </header>
    );
};

export default Banner;