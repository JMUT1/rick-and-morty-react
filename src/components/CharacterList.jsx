import { useEffect, useState } from 'react'
import Character from "./Character"


const CharacterList = () => {

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
    <>
     {
        characters.map(character =>{
          return(
            <Character key={character.id} character={character} />
          )
        })
      }

    </>
  )
}

export default CharacterList