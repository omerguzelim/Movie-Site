import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const ResultCard = ({movie}) => {
    const { watchlist,addMovieToWatchlist} =useContext(GlobalContext);
    const storedMovie = watchlist.find((o)=>o.id==movie.id)
  return ( 
    <div className="result-card">
        <div className="poster-wrapper">
            {movie.poster_path ? (
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={`${movie.poster_path}`} />
            ):(
                <div className="filler-poster">
                    <p className='description'>Görsele Ulaşılmıyor</p>
                </div>
            )}
        </div>
        <div className="info">
            <div className="header">
                <h3 className='title'>{movie.title}</h3>
                <h4 className='release-date'>
                    {movie.release_date ? movie.release_date.substring(0,4): "Bilgisi Yok" }
                </h4>
                <h4 className='Imdb'>
                    IMDB: <b>{movie.vote_average}</b>
                </h4>
            </div>
            <div className="controls">
               
                <button className='btn' disabled={storedMovie} onClick={() => addMovieToWatchlist(movie)}>
                    İzleneceklere Ekle
                </button>
                
                
            </div>
        </div>
    </div>
  )
}

export default ResultCard