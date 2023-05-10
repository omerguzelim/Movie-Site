import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import MovieCard from './MovieCard';

const Watched = () => {
  const {watched} = useContext(GlobalContext)
  return (

<div className="movie-page">
  <div className="container">
    <div className="header">
      <h1 className="heading">İzlenen Filimler</h1>

    </div>
    {watched.length > 0 &&(
      <div className="movie-grid">
        {watched.map((movie) => (
          <MovieCard movie={movie} key={movie.id} type="watched"/>
        ))}
      </div>
    )}
  </div>
</div>
  )
};

export default Watched;