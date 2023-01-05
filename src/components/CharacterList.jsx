import { useEffect, useState } from 'react'
import Character from "./Character"


const NavPage = ({page, setPage})=>{
    return (
        <header className= "d-flex justify-content-between align-items-center">
            <p>Page:{page} </p>
            <button className='btn btn-primary' onClick={()=> setPage(page + 1)}>Page {page}</button>
        </header>
    )
}

const CharacterList = () => {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1)

    useEffect(()=>{
      async function fetchData(){
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        const data = await response.json()
       setCharacters(data.results);
       setTimeout(()=>{
           setLoading(false)
       },2000)
       console.log(characters);
      }
      fetchData()
    },[page])
    
  return (
    <div className='container'>
        <NavPage page={page} setPage={setPage}/>
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