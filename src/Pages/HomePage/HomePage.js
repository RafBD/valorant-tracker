import React from 'react'
import './HomePage.css';

import NavBar from '../../Components/NavBar';

export const HomePage = () => {
  return (
    <div>
        <NavBar />
        <div className='header'>
          <div>
            <h1 className='text-5xl font-bold'>Your Valorant Stats</h1>
            <input type="text" placeholder="Buscar" className="" />
          </div>
        </div>
    </div>
  )
}

export default HomePage;
