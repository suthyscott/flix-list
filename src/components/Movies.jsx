import React from 'react'
import MovieCard from './MovieCard'

const Movies = ({movies}) => {
  // const {movies} = props

  return (
    <div>
      <h1>Movies</h1>
      {movies.map(movie => {
        return <MovieCard movie={movie} key={movie.id}/>
      })}
    </div>
  )
}

export default Movies