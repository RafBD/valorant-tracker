import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LeaderBoard from './Pages/LeaderBoard/LeaderBoard';
import HomePage from './Pages/HomePage/HomePage';
import NavBar from './Components/NavBar';
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
        <Router>
            <div className="overflow-x-auto bg-gray-900 text-white min-h-screen">
                {loading ? (
                    <p>Cargando 🫡</p>
                ) : (
                    <>
                        <NavBar />
                        <Routes>
                            <Route path="/HomePage" element={<HomePage players={players} />} />
                            <Route path="/leaderboard" element={<LeaderBoard players={players} />} />
                        </Routes>
                    </>
                )}
            </div>
        </Router>
    );
};

export default App;
