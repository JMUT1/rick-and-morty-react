import React from 'react'
import { useEffect } from 'react'


const App = () => {

useEffect(()=>{
  async function fetchData(){
    const response = await fetch("https://rickandmortyapi.com/api/character")
    const data = await response.json()
    console.log(data);
  }

  fetchData()
},[])

  return (
    <h1>Hello World</h1>
  )
}

export default App