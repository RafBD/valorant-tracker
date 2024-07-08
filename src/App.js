import React, { useEffect, useState } from 'react';
import LeaderBoard from './Pages/LeaderBoard';
import HomePage from './Pages/HomePage';
import './App.css';

const App = () => {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_API_URL);
                const data = await response.json();
                setPlayers(data.players);
            } catch (error) {
                console.error('Error fetching player data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPlayers();
    }, []);

    return (
        <div className="overflow-x-auto bg-gray-900 text-white min-h-screen p-8">
            {loading ? (
                <p>Cargando 🫡</p>
            ) : (
                <HomePage />
                
                // <LeaderBoard players={players} />
            )}
        </div>
    );
};

export default App;
