import React from 'react'
import { useEffect, useState } from 'react'


const App = () => {

  const [characters, setCharacters] = useState([])

useEffect(()=>{
  async function fetchData(){
    const response = await fetch("https://rickandmortyapi.com/api/character")
    const data = await response.json()
   setCharacters(data.results);
   console.log(characters);
  }
  fetchData()
},[])



  return (
    <div>
      <h1>Rick and Morty</h1>
      {
        characters.map(({id,image,gender,name}) =>{
          return(
          <div key={id}>
            <h2>{name}</h2>
            <img src={image} alt={name} />
          </div>
          )
        })
      }
    </div>
  )
}

export default App