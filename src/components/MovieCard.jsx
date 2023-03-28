import { useState } from "react"
import axios from 'axios'

const MovieCard = ({ movie, getShowsAndMovies }) => {
    const [editing, setEditing] = useState(false)
    const [movieName, setMovieName] = useState(movie.movieName)
    const [imageUrl, setImageUrl] = useState(movie.imageUrl)
    const [length, setLength] = useState(movie.length)
    const [priority, setPriority] = useState(movie.priority)

    const optionsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const handleSubmit = (e) => {
      e.preventDefault()
      let body = {movieName, imageUrl, length, priority, id: movie.id}

      axios.put('/api/movies', body)
        .then(res => {
          getShowsAndMovies()
          setEditing(false)
        })
        .catch(err => console.log(err))
    }
    return (
        <div className="w-3/4 border border-green-500 flex flex-col items-center">
            {!editing ? (
                <>
                    <h2>{movie.movieName}</h2>
                    <img className="w-4/5 " src={movie.imageUrl} />
                    <p>{movie.length}</p>
                    <p>Priority: {movie.priority}</p>
                </>
            ) : (
                <form onSubmit={e => handleSubmit(e)}>
                    <input
                        placeholder="Enter the movie's name"
                        value={movieName}
                        onChange={e => setMovieName(e.target.value)}
                    />

                    <select
                        value={priority}
                        onChange={e => setPriority(+e.target.value)}
                    >
                        {optionsArr.map(op => (
                            <option value={op}>{op}</option>
                        ))}
                    </select>

                    <input
                        placeholder="Enter the movie's length"
                        value={length}
                        onChange={e => setLength(e.target.value)}
                    />

                    <input
                        placeholder="Enter an image url for the movie"
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                    />
                    <button>Submit</button>
                </form>
            )}
            <button onClick={e => setEditing(!editing)}>Edit Movie</button>
        </div>
    )
}

export default MovieCard
