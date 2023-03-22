import {useState} from 'react'
import axios from 'axios'

const Auth = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [register, setRegister] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post(register ? '/api/register' : '/api/login', {username, password})
      .then(res => {
        console.log(res.data)
        setPassword('')
        setUsername('')
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <h2>Welcome to FlixList! Please {register ? 'register!' : 'login!'}</h2>
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