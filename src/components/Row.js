import axios from '../axios';
import React, {useState, useEffect} from 'react'
import requests from '../requests';
import "./row.css"
function Row({title , fetchUrl , isLarge}) {
    const BASE_URL ="https://image.tmdb.org/t/p/original/"
    const [movies, setMovies] = useState([]);
    useEffect(() => {
    async function fetchData(){
        const request = await axios.get(fetchUrl);
       setMovies(request.data.results);
        return requests;
    }
    fetchData();
}, [fetchUrl]) ;

    return (
        <div className="row" >
            <h2> {title} </h2>

            <div className="row_posters" >
            {   movies.map( movie=>(
                <img
                key= {movie.id}
                className={`row_poster ${isLarge &&"row_Large"}`} src={ `${BASE_URL}${isLarge ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
            
            
            ))}
            </div>
        </div>
    )
}

export default Row
