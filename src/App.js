import axios from 'axios';
import React, { useState, useEffect } from 'react';
//import styled from 'styled-components';
import Character from './components/Character';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacter] = useState([]);
  

 useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then((res) => {
        setCharacter(res.data.results)
      })
      .catch((err) => {
        console.log('nope, not quite!')
      })
  }, [])


  return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>
      <div>
        {!characters && <loading />} 
      {characters && characters.map(char => (
          <Character key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
}

export default App;
