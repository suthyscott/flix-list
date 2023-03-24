import {useEffect, useState, useContext} from 'react'
import axios from 'axios'
import AuthContext from '../store/authContext'

const Home = () => {
  const {userId} = useContext(AuthContext)

  const getShowsAndMovies = () => {
    axios.get(`/api/flix/${userId}`)
      .then(res => console.log(res.data))
  }

  useEffect(getShowsAndMovies, [])
  return (
    <div>Home</div>
  )
}

export default Home