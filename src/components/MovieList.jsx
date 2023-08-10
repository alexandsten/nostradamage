import React from 'react'
import Movie from './Movie'
import movieListStyle from './style/movieListStyle.module.css'

const MovieList = (movieResponse) => {
   let responseLoop = movieResponse.movieResponse

   // denna komponents kör en loop genom API'ets träffar och matar ut resultaten i Movie komponenter
   // om användarens sökning var felaktig visas API'ets error meddelande

  return (
    
    <ul className={movieListStyle.listStyle}>
        {
          responseLoop.length    ? 
          responseLoop.map(listResponse => (
            <li key={listResponse.imdbID}>
              <Movie movieProps={listResponse}/>
            </li>
            ))
          : 
          <p>{movieResponse.movieError}</p>
        }
    </ul>
  )
}

export default MovieList
