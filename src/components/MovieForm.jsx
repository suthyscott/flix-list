import {useState} from 'react'

const MovieForm = () => {
    const [movieName, setMovieName] = useState('')
    const [priority, setPriority] = useState(1)
    const [length, setLength] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const optionsArr = [1,2,3,4,5,6,7,8,9,10]

  return (
    <form>
      <input placeholder="Enter the movie's name" value={movieName} onChange={e => setMovieName(e.target.value)}/>
      
      <select value={priority} onChange={e => setPriority(+e.target.value)}>
        {optionsArr.map(op => <option value={op}>{op}</option>)}
      </select>

      <input placeholder="Enter the movie's length" value={length} onChange={e => setLength(e.target.value)}/>
      
      <input placeholder="Enter an image url for the movie" value={imageUrl} onChange={e => setImageUrl(e.target.value)}/>
    </form>
  )
}

export default MovieForm