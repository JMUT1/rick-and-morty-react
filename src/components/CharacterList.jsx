import { useEffect, useState } from 'react'
import Character from "./Character"


const CharacterList = () => {

    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
      async function fetchData(){
        const response = await fetch("https://rickandmortyapi.com/api/character")
        const data = await response.json()
       setCharacters(data.results);
       setTimeout(()=>{
           setLoading(false)
       },2000)
       console.log(characters);
      }
      fetchData()
    },[])
    
  return (
    <div className='container'>
        {
            loading ? (<h1 className='d-flex justify-content-center '>Loading...</h1> ): (
                <div className='row'>
                    {characters.map((character)=>{
                        return(
                            <div className='col-md-4' key={character.id}>
                                <Character character={character}/>
                            </div>
                        )
                    })}
                </div>
            )}

    </div>
  )
}

export default CharacterList