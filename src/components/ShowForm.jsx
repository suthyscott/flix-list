import {useState, useContext} from 'react'
import axios from 'axios'
import AuthContext from '../store/authContext'

const ShowForm = () => {
  const [showName, setShowName] = useState('')
  const [priority, setPriority] = useState(1)
  const [avgEpisodeLength, setAvgEpisodeLength] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [seasons, setSeasons] = useState(1)
  const {userId, token} = useContext(AuthContext)

  const optionsArr = [1,2,3,4,5,6,7,8,9,10]
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const body = {
      showName,
      priority,
      avgEpisodeLength,
      seasons,
      imageUrl,
      userId
    }
    
    axios.post('/api/shows', body, {
      headers: {
        authorization: token
      }
    })
      .then(res => console.log(res))
  }

return (
  <form onSubmit={e => handleSubmit(e)}>
    <input placeholder="Enter the show's name" value={showName} onChange={e => setShowName(e.target.value)}/>
    
    <select value={priority} onChange={e => setPriority(+e.target.value)}>
      {optionsArr.map(op => <option value={op}>{op}</option>)}
    </select>

    <input placeholder="Enter the show's average episode length" value={avgEpisodeLength} onChange={e => setAvgEpisodeLength(e.target.value)}/>
    
    <input placeholder="Enter an image url for the show" value={imageUrl} onChange={e => setImageUrl(e.target.value)}/>

    <input placeholder='How many seasons does the show have?' value={seasons} onChange={e => setSeasons(e.target.value)} type='number'/>
    <button>Submit</button>
  </form>
)
}

export default ShowForm