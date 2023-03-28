import React from "react"
import MovieCard from "./MovieCard"

const Movies = ({ movies, searchInput, getShowsAndMovies }) => {
    return (
        <div className="w-2/4 border border-green-900 flex flex-col items-center">
            <h1>Movies</h1>
            {movies
                .filter(movie => {
                    let title = movie.movieName.toLowerCase()
                    return title.includes(searchInput.toLowerCase())
                })
                .map(movie => {
                    return <MovieCard movie={movie} key={movie.id} getShowsAndMovies={getShowsAndMovies}/>
                })}
        </div>
    )
}

export default Movies
