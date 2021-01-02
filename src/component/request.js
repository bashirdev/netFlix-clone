const APIKEY = 'd5c54ef6b31835dfc70788b9d88f9a49'

const request ={
    fetchTrending:`/trending/all/week?api_key=${APIKEY}`,
    fetchNetFlixOrginals:`/discover/tv?api_key=${APIKEY}`,
    fetchTopRated:`/movie/top_rated?api_key=${APIKEY}`,
    fetchActionMovies:`/discover/movie?api_key=${APIKEY}`,
    fetchComedyMovies:`/discover/movie?api_key=${APIKEY}`,
    fetchHorrorMovies:`/discover/movie?api_key=${APIKEY}`,
    fetchRomanticMovies:`/discover/movie?api_key=${APIKEY}`,
    fetchDocumentaries:`/discover/movie?api_key=${APIKEY}`,

}

export default request