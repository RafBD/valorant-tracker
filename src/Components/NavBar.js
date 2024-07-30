import React from 'react'
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div>
            <nav className="bg-gray-800">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img className="h-8 w-8" src="https://static.vecteezy.com/system/resources/previews/022/636/388/non_2x/valorant-logo-valorant-icon-transparent-free-png.png" alt="ValTracker Logo" />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex space-x-4">
                                    {/* Encuentra a un jugador, Agente, ej. player#raf1, or Chamber */}
                                    <input type="text" placeholder="Buscar" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" />
                                    <Link to="/HomePage" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Inicio</Link>
                                    <Link to="/leaderboard" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Leaderboard (Ranked)</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
