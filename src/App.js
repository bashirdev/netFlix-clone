import React from 'react';
import Banner from './component/Banner';
import Header from './component/Header';
import request from './component/request';
import SliderRow from './component/SliderRow';

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <SliderRow 
      isLargeRow={true}
        title='NETFLIX ORGINALS'
        fetchUrl={request.fetchNetFlixOrginals}
      />
      <SliderRow 
          title='Tranding Now'
          fetchUrl={request.fetchTrending}

       />
      <SliderRow 
        title='Top Rated'
          fetchUrl={request.fetchTopRated}
      />
      <SliderRow 
        title='Acton movies'
          fetchUrl={request.fetchActionMovies}
      />
      <SliderRow 
      title='Horror movies'
          fetchUrl={request.fetchHorrorMovies}
       />
     
      <SliderRow 
      title='Romance Movies'
          fetchUrl={request.fetchRomanticMovies}
       />
      <SliderRow 
        title='Documenties'
          fetchUrl={request.fetchDocumentaries}
      />
    </>
  );
};

export default App;

//api_key= d5c54ef6b31835dfc70788b9d88f9a49

//https://api.themoviedb.org/3/movie/550?api_key=d5c54ef6b31835dfc70788b9d88f9a49

//token =eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWM1NGVmNmIzMTgzNWRmYzcwNzg4YjlkODhmOWE0OSIsInN1YiI6IjVmNmYyNGMwNTMyYWNiMDAzNjE4YjU4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3eX4gCyi2LQIlW6vgvWpAdwoiQVatYUoBY_7FHJMNQo