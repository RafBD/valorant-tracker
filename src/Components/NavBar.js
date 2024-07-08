import React from 'react'

export default function NavBar() {
  return (
    <div>
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <img className="h-8 w-8" src="" alt="ValTracker Logo" />
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex space-x-4">
                            {/* Encuentra a un jugador, Agente, ej. player#raf1, or Chamber */}
                            <input type="text" placeholder="Buscar" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" />
                            <a href="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Inicio</a>
                            <a href="/leaderboard" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Leaderboard (Ranked)</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}
