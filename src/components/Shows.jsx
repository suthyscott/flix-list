import React from 'react'
import ShowCard from './ShowCard'

const Shows = ({shows}) => {
  return (
    <div>
      <h1>Shows</h1>
      {shows.map(show => {
        return <ShowCard show={show} key={show.id}/>
      })}
    </div>
  )
}

export default Shows