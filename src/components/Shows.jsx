import React from 'react'
import ShowCard from './ShowCard'

const Shows = ({shows, searchInput, getShowsAndMovies}) => {

  let filtered = shows.filter(show => {
    let title = show.showName.toLowerCase()
    return title.includes(searchInput.toLowerCase())
  })

  let showsDisplay = filtered.map(show => {
    return <ShowCard show={show} key={show.id} getShowsAndMovies={getShowsAndMovies}/>
  })

  return (
    <div className='w-2/4 border border-red-900 flex flex-col items-center'>
      <h1>Shows</h1>
      {showsDisplay}
    </div>
  )
}

export default Shows