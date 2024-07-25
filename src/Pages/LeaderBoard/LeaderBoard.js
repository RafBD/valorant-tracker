import React, { useState, useEffect } from "react";
import './Leaderboard.css';

const LeaderBoard = () => {
    const [players, setPlayers] = useState([]);
    const [selectedAct, setSelectedAct] = useState(process.env.REACT_APP_ACT_ID_E91); // Acto 3 (Actual) por defecto
    const [loading, setLoading] = useState(true);
    const acts = [
        { id: process.env.REACT_APP_ACT_ID_E81, name: "Episodio 8: Acto 1" },
        { id: process.env.REACT_APP_ACT_ID_E82, name: "Episodio 8: Acto 2" },
        { id: process.env.REACT_APP_ACT_ID_E83, name: "Episodio 8: Acto 3" },
        { id: process.env.REACT_APP_ACT_ID_E91, name: "Episodio 9: Acto 1" },
    ];

    const regions = [
        { id: "na", name: "Norteamérica" },
        { id: "eu", name: "Europa" },
        { id: "ap", name: "Asia-Pacífico" },
        { id: "kor", name: "Korea" },
        { id: "br", name: "Brasil" },
        { id: "latam", name: "Latinoamérica" },
    ]

    useEffect(() => {
        fetchRankedData(selectedAct);
    }, [selectedAct]);

    const handleSelectChange = (event) => {
        setSelectedAct(event.target.value);
    };

    const fetchRankedData = async (act) => {
        setLoading(true);
        const apiUrl = `https://na.api.riotgames.com/val/ranked/v1/leaderboards/by-act/${act}?size=100&startIndex=0&api_key=${process.env.REACT_APP_API_KEY}`;

        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setPlayers(data.players || []); // Asegúrate de que 'data.players' exista
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="overflow-x-auto bg-gray-900 text-white min-h-screen p-5 w-3/4">
            <div className="bg-[#1B2733]">
                <div className="p-5">
                    <h1 className="text-xl mb-4">
                        Clasificación competitiva de Norteamérica para el episodio 9: tabla de clasificación del acto 1 (Top 100)
                    </h1>
                    <form onSubmit={(e) => e.preventDefault()} className="m-auto flex items-center">
                        <select
                                name="regions"
                                id="regions"
                                className="mr-2 p-2 rounded bg-[#34495D]"
                                value={selectedAct}
                                onChange={handleSelectChange}
                        >
                                {regions.map(region => (
                                    <option key={region.id} value={region.id}>
                                        {region.name}
                                    </option>
                                ))}
                        </select>
                        <select
                            name="acts"
                            id="acts"
                            className="mr-2 p-2 rounded bg-[#34495D]"
                            value={selectedAct}
                            onChange={handleSelectChange}
                        >
                            {acts.map(act => (
                                <option key={act.id} value={act.id}>
                                    {act.name}
                                </option>
                            ))}
                        </select>
                    </form>
                </div>
            </div>

            {loading ? (
                <div className="text-center">
                    <div class="text-center">
                        {/* SPINNER */}
                        <div role="status">
                            <svg aria-hidden="true" class="mt-6 inline w-11 h11 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                        </div>
                    </div>
                </div>
            ) : (
                <table className="table-auto min-w-full overflow-hidden text-center">
                    <thead className="bg-gray-800 text-white/50">
                        <tr>
                            <th className="">Posición</th>
                            <th className="">Jugador</th>
                            <th className="">Puntos de Rango</th>
                            <th className="">Rango</th>
                            <th className="">Victorias</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player, index) => (
                            <tr key={player.puuid} className={index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-700'}>
                                <td>
                                    {player.leaderboardRank} 
                                </td>
                                <td className="text-start">
                                    {player.gameName}
                                    <span className="text-xs p-[0.29rem] ml-2 text-white/75 font-[500] bg-[#2C353D]">
                                        {`#${player.tagLine}`}
                                    </span>   
                                </td>
                                <td className="">{player.rankedRating}</td>
                                <td className="">{player.competitiveTier === 27 ? ' Radiante' : '0'}</td>
                                <td className="px-4 py-2">{player.numberOfWins}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default LeaderBoard;
