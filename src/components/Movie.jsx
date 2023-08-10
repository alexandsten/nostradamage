import React from 'react'

const Movie = (movieProps) => {
    let movie = movieProps.movieProps

    // Denna komponent hämtar värden som skickades från MovieList och skapar movie komponenter
  return (

    <>
        <b>{movie.Title}</b>
          <div>
            <img src={movie.Poster}/>
          </div>
        <p>{movie.Year}</p>
        <p>{movie.Type}</p> 
    </> 
  )
}

export default Movie
