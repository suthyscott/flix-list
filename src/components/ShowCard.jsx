import React from 'react'

const ShowCard = ({show}) => {
  return (
    <div className='w-3/4 border border-green-500 flex flex-col items-center'>
      <h2>{show.showName}</h2>
      <img className='w-4/5 ' src={show.imageUrl}/>
      <p>{show.avgEpisodeLength}</p>
      <p>Priority: {show.priority}</p>
      <p>Number of seasons: {show.seasons}</p>
    </div>
  )
}

export default ShowCard