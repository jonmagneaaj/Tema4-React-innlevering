import React, {useState} from 'react';
import {Link, Router} from '@reach/router'
import Facts from './components/Facts'
import Favourites from './components/Favourites'

import './App.css';


const App = () =>{
  const [fav,setFav] = useState([])

  const addFav = (n) => {
    setFav([...fav, n])
  }
  

  return(
    <div class='site-wrap'>
      <nav className='top-nav'>
        <Link to='/'>Facts</Link>
        <Link to='fav'>Favourites</Link>
      </nav>
      <Router >
        <Facts addFav={addFav} path='/'/>
        <Favourites  fav={fav} path='fav' />
      </Router>
    </div>
  )
}

export default App
