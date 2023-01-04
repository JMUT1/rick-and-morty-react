
const Character = ({character}) => {
  return (
    <div className="text-center  p-5">
        <h3>{character.name}</h3>
        <img className="img-fluid rounded-pill" src={character.image} alt={character.name} />
        <h5 className="my-3"> Origin: {character.origin.name}</h5>
    </div>
  )
}

export default Character