import {useState} from 'react'
import MovieForm from './MovieForm'
import ShowForm from './ShowForm'

const AddFlick = () => {
  const [movie, setMovie] = useState(true)

  return (
    <div>
      {movie ? <MovieForm/> : <ShowForm/>}
      <button onClick={() => setMovie(!movie)}>Need to add a {movie ? "show?" : "movie?"}</button>
    </div>
  )
}

export default AddFlick