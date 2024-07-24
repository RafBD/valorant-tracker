import React from 'react'
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = ({ players }) => {
  return (
    <div>
      <div className='header'>
        {/* Grid - Col 1 */}
        <div>
          <div className='flex items-center gap-4'>
            <img src='https://seeklogo.com/images/V/valorant-logo-FAB2CA0E55-seeklogo.com.png' alt='Valorant Logo' className='w-20 h-20 rounded-md' />
            <h1 className='text-5xl font-bold'>Your Valorant Stats</h1>
          </div>
          <div>
            <input type="text" placeholder="Buscar" className="" />
          </div>
        </div>
        {/* Grid - Col 2 */}

        <div className='flex'>
          <div class="text-center p-3 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight">
              {players.slice(0, 1).map((player, index) => (
                <p key={index}>{player.gameName}</p>
              ))}
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Top NA Rating</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {players.slice(0, 1).map((player, index) => (
                <p key={index}>{player.rankedRating}</p>
              ))}</p>
            <Link to="/leaderboard" className="hover:bg-gray-700 bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm">Leaderboard</Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
