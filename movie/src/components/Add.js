import React, { useState } from 'react'
import ResultCard from './ResultCard';

export const Add = () => {
    const [query,setQuery]= useState("");
    const [results, setResults] = useState([])
    function onChange(e) {
         setQuery(e.target.value)
         fetch(`https://api.themoviedb.org/3/search/movie?api_key=78a6cbf6615d539683eed745cdbe7201&language=en-US&page=1&include_adult=false&query=${e.target.value}`).then((res)=>res.json()).then((data)=> setResults(data.results));
    }
    return (
        <div className='add-page'>
            <div className="container">
                <div className="add-content">
                    <img src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/8bcoRX3hQRHufLPSDREdvr3YMXx.jpg" />
                    <div className="titles">
                        <h1>Hoş Geldiniz.</h1>
                        <h2>Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.</h2>
                    </div>
                    <div className="input-wrapper">
                        <input type='text' value={query} onChange={onChange} placeholder='Film,Dizi,Kişi ara...'></input>
                    </div>
                    {results.length > 0 &&(
                        <ul className="results">
                            {results.map((movie)=>(
                                <li key={movie.id}>
                                    <ResultCard movie={movie}/>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}
