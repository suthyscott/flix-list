import { Routes, Route, Navigate } from 'react-router-dom';
import Auth from './components/Auth';
import Home from './components/Home';
import AddFlick from './components/AddFlick';
import Header from './components/Header'
import AuthContext from './store/authContext';
import { useContext } from 'react';

function App() {
  const {token} = useContext(AuthContext)

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={token ? <Navigate to='/home'/> : <Auth/>}/>
        <Route path='/home' element={token ? <Home/> : <Navigate to='/'/>}/>
        <Route path='/add' element={token ? <AddFlick/> : <Navigate to='/'/>}/>
      </Routes>
    </div>
  );
}

export default App;
