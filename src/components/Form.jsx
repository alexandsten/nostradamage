import React from 'react'
import formStyle from './style/formStyle.module.css'

const Form = ({handleChange, handleType}) => {
 
  // Denna komponent låter användaren utföra sökningar som behandlas i MovieAPI komponenten
  // Dessa värden skickas till föräldern genom onChange som kallar på en funktion

  return (
    <form className={formStyle.fomStyling}>
        <legend>Sök</legend>
        <input className={formStyle.formInput} type="text" name="search" defaultValue={"batman"} onChange={handleChange}/>
        <legend>Filtrera</legend>
        <select className={formStyle.formSelect} name="filter" onChange={handleType}>
          <option value="">All</option>
          <option value="&type=movie">Movie</option>
          <option value="&type=series">Series</option>
          <option value="&type=game">game</option>
        </select>
    </form>
  )
}

export default Form
