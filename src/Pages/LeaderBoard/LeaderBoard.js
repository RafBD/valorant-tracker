import React from "react";

const LeaderBoard = ({ players }) => {
    return (
        <div className="overflow-x-auto bg-gray-900 text-white min-h-screen p-5">
            <h1 className="font-bold text-center mb-4">
                Clasificación competitiva de Norteamérica para el episodio 9: tabla de clasificación del acto 1 (100 jugadores)
            </h1>
            {/* Form to select the act that you want to see the leaderboard for (optional) */}

            <div className="bg-[#1B2733]">
                <form action="" method="POST" className="flex items-center mb-4 gap-1">
                <label htmlFor="acts" className="mr-2">Elige el acto:</label>
                <select name="acts" id="acts" className="bg-gray-800 p-2 rounded">
                    <option value="4539cac3-47ae-90e5-3d01-b3812ca3274e">ACT 8 (Current)</option>
                </select>
                <input type="submit" value="Seleccionar" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded cursor-pointer" />
            </form>

            </div>
            
            



            <table className="table-auto min-w-full overflow-hidden border border-white/50 text-center">
                <thead className="bg-gray-800 text-white/50">
                    <tr>
                        <th className="px-4 py-2">Posición</th>
                        <th className="px-4 py-2">Jugador</th>
                        <th className="px-4 py-2">Puntos de Rango</th>
                        <th className="px-4 py-2">Rango</th>
                        <th className="px-4 py-2">Victorias</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, index) => (
                        <tr key={player.puuid} className={index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-700'}>
                            {console.log(player.puuid)}
                            <td className="px-4 py-2">{player.leaderboardRank}</td>
                            <td className="px-4 py-2">{player.gameName}</td>
                            <td className="px-4 py-2">{player.rankedRating}</td>
                            <td className="px-4 py-2">{player.competitiveTier === 27 ? ' Radiante' : ''}</td>
                            
                            <td className="px-4 py-2">{player.numberOfWins}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LeaderBoard;