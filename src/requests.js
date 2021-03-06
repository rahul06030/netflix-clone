const API_KEY = "db2340b2e175356b1f49efde1a3ec1c9"

const requests={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US` ,
    fetchNetflixOriginals :`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,   
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,    
    fetchRomanticMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,  
}
// https://api.themoviedb.org/3/discover/api_key=XXXXX&with_genres=27

export default requests;