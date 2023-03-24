import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div>
      <h2>{movie.movieName}</h2>
      {/* <img src={movie.imageUrl}/> */}
    </div>
  )
}

export default MovieCard