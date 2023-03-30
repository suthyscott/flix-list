import { useEffect, useState, useContext } from "react"
import axios from "axios"
import AuthContext from "../store/authContext"
import Movies from "./Movies"
import Shows from "./Shows"

const Home = () => {
    const { userId , token} = useContext(AuthContext)
    const [movies, setMovies] = useState([])
    const [shows, setShows] = useState([])
    const [searchInput, setSetSearchInput] = useState("")

    const getShowsAndMovies = () => {
        axios.get(`/api/flix/${userId}`, {
            headers: {
              authorization: token
            }
          }).then(res => {
            setMovies(res.data.movies)
            setShows(res.data.shows)
        })
    }

    useEffect(getShowsAndMovies, [])
    return (
        <div className="flex flex-col items-center">
            <input
                className="border"
                placeholder="Search for a movie or show!"
                value={searchInput}
                onChange={e => setSetSearchInput(e.target.value)}
            />
            <section className="flex justify-evenly w-full">
                <Movies movies={movies} searchInput={searchInput} getShowsAndMovies={getShowsAndMovies}/>
                <Shows shows={shows} searchInput={searchInput} getShowsAndMovies={getShowsAndMovies}/>
            </section>
        </div>
    )
}

export default Home
