import React, { useEffect, useState } from 'react'
import Form from './Form'
import MovieList from './MovieList'

const MovieApi = () => {

    let [movieSearch, setMovieSearch] = useState('batman');           // useState för användarens sökning
    let [typeSearch, setTypeSearch] = useState('&type=movie');        // useState för användarens filtrering
    let [movieError, setMovieError] = useState('felmeddelande');      // useState för det aktuella felmeddelandet
    let [movieResponse, setMovieResponse] = useState([]);             // useState för API'ets respons
  
  
    const fetchMovieAPI = async () => {   // funktion som hämtar och bearbetar API'et
      
      try {
        setMovieResponse([])        // nollställer föregående API'ets svar
        
        const response = await fetch(`https://www.omdbapi.com/?apikey=b726c748&s=${movieSearch}${typeSearch}`);
        const movieAPI = await response.json();
        
        movieAPI.Search ?       // ternary operator som undersöker API'ets svar
         
        setMovieResponse(movieAPI.Search)
        :
        setMovieError(movieAPI.Error)  // felaktiga svar hämtar Error meddelande
  
      } catch(error) {
        console.log(error)
      }
    }
  
    // hook som körs när programmet startas, och när movieSearch eller typeSearch ändras
    useEffect(() => {         
      
      fetchMovieAPI();
      
    }, [movieSearch, typeSearch])
  
    const handleChange = (e) => setMovieSearch(e.target.value);   // ändrar värdet på movieSearch genom Form komponenent
  
    const handleType = (e) => setTypeSearch(e.target.value);   // ändrar värdet på typeSearch genom Form komponenent
      
    return (
      <div>
        <Form handleChange={handleChange} handleType={handleType}></Form>
        <MovieList movieResponse={movieResponse} movieError={movieError}/>
      </div>
    )
  }

  export default MovieApi