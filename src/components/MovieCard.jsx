import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div className='w-3/4 border border-green-500'>
      <h2>{movie.movieName}</h2>
      {/* <img src={movie.imageUrl}/> */}
    </div>
  )
}

export default MovieCard