import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from './components/Header'
import MovieAPI from './components/MovieAPI'
import Footer from './components/Footer'
import NostradamageView from './nostradamage/NostradamageView'

import '../src/fonts/fonts.css';

function App() {

  return (
    <>
     <NostradamageView />
    </>
  )
}

export default App
