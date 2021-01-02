import React, { useEffect, useState } from 'react';
import './SliderRow.css'
import axios from './Axios'
import movieTrailer from 'movie-trailer'

import YouTube from 'react-youtube';
const baseUrl ="https://image.tmdb.org/t/p/original"


const SliderRow = ({title,  fetchUrl, isLargeRow}) => {
  
const [movies , setMovies] = useState([])

const [trailerUrl, setTrailerUrl] = useState('')

  

// console.log( fetchUrl);

     useEffect(()=>{
       const fetchData = async()=>{
           const request = await axios.get(fetchUrl)
           setMovies(request.data.results)
           console.log(request.data.results);
           return request
       }
       fetchData()
     },[fetchUrl])


     const handleTrillerPlay=(movie)=>{
        if(trailerUrl){
            setTrailerUrl('')
        }else{
           movieTrailer(movie?.name || "Trailler Unavailable").then((url)=>{
               const urlParams = new URLSearchParams( new  URL(url).search)
               setTrailerUrl(urlParams.get('v'))
           }).catch(()=> console.log('Temporary Unavailable'))
        }
   }

   const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters

        autoplay: 1,
      },
    };


    return (
        <div className='row'>
            {title}
            <div className="row__posters">
            {
                movies.map(movie => (
                    <img 
                    key={movie.id}
                     onClick={()=> handleTrillerPlay(movie)}
                     className={`row__poster ${isLargeRow &&  "row__posterLarge"}`} src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))
            }
                
            </div>

            {trailerUrl &&  <YouTube videoId = {trailerUrl} opts={opts} />}
        </div>
    );
};

export default SliderRow;