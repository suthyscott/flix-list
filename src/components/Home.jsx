import {useEffect, useState, useContext} from 'react'
import axios from 'axios'
import AuthContext from '../store/authContext'
import Movies from './Movies'
import Shows from './Shows'

const Home = () => {
  const {userId} = useContext(AuthContext)
  const [movies, setMovies] = useState([])
  const [shows, setShows] = useState([])

  const getShowsAndMovies = () => {
    axios.get(`/api/flix/${userId}`)
      .then(res => {
        setMovies(res.data.movies)
        setShows(res.data.shows)
      })
  }

  useEffect(getShowsAndMovies, [])
  return (
    <div>
      <Movies  movies={movies}/>
      <Shows shows={shows}/>
    </div>
  )
}

export default Home