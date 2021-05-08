import axios from '../axios';
import React, {useState, useEffect} from 'react'
import requests from '../requests';
import "./row.css"
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer"


function Row({title , fetchUrl , isLarge}) {
    const BASE_URL ="https://image.tmdb.org/t/p/original/"
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");


    useEffect(() => {
    async function fetchData(){
        const request = await axios.get(fetchUrl);
       setMovies(request.data.results);
        return requests;
    }
    fetchData();
}, [fetchUrl]) ;

    const opts={
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1,
        },
    }
const handleOnClick=(movie) =>{
    if(trailerUrl){
        setTrailerUrl("")
    }else{
        movieTrailer(movie?.name ||"" )
        .then((url)=>{
                const urlParams=new URLSearchParams( new URL(url).search);
                setTrailerUrl(urlParams.get("v"));


        })
        .catch((error) =>console.log(error))
    }

   };
    return (
        <div className="row" >
            <h2> {title} </h2>

            <div className="row_posters" >
            {   movies.map( movie=>(
                <img
                key= {movie.id}
                onClick={() => handleOnClick(movie)}
                className={`row_poster ${isLarge &&"row_Large"}`} 
                src={ `${BASE_URL}${isLarge ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
            
            ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl}opts={opts} /> }
                   </div>
    )
}

export default Row
