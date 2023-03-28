import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div className='w-3/4 border border-green-500 flex flex-col items-center'>
      <h2>{movie.movieName}</h2>
      <img className='w-4/5 ' src={movie.imageUrl}/>
      <p>{movie.length}</p>
      <p>Priority: {movie.priority}</p>
    </div>
  )
}

export default MovieCard