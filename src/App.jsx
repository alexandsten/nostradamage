import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import MovieApi from './components/MovieAPI'
import mainStyle from './components/style/mainStyle.module.css'



function App() {
  

  return (
    <div className={mainStyle.mainDiv}>
      <Header/>
      <MovieApi/>
      <Footer/>
    </div>
  )
}

export default App
