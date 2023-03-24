import {useState, useContext} from 'react'
import axios from 'axios'
import AuthContext from '../store/authContext'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [register, setRegister] = useState(false)
  const {login} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post(register ? '/api/register' : '/api/login', {username, password})
      .then(res => {
        setPassword('')
        setUsername('')
        login(res.data.token, res.data.exp, res.data.userId)
        navigate('/home')
      })
      .catch(err => {
        console.log(err)
        alert(err.response.data)
      })
  }

  return (
    <div>
      <h2>Please {register ? 'register!' : 'login!'}</h2>
      <form onSubmit={e => handleSubmit(e)}>
        <input placeholder='username' value={username} onChange={e => setUsername(e.target.value)}/>
        <input placeholder='password' value={password} onChange={e => setPassword(e.target.value)}/>
        <button>submit</button>
      </form>
      <button onClick={() => setRegister(!register)}>Need to {register ? "login?" : "register?"}</button>
    </div>
  )
}

export default Auth