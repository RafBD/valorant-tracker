import React, { useState, useEffect } from "react";
import LoadingSpinner from "../../Components/Loading";
import './Leaderboard.css';

const LeaderBoard = () => {
    const [players, setPlayers] = useState([]);
    const [selectedAct, setSelectedAct] = useState(process.env.REACT_APP_ACT_ID_E91); // Acto 3 (Actual) por defecto
    const [selectedRegion, setSelectedRegion] = useState("latam"); // Norteamérica por defecto
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
        { id: "kr", name: "Korea" },
        { id: "br", name: "Brasil" },
        { id: "latam", name: "Latinoamérica" },
    ]

    useEffect(() => {
        fetchRankedData(selectedAct, selectedRegion);
    }, [selectedAct, selectedRegion]);

    const handleSelectChange = (event) => {
        setSelectedAct(event.target.value);
    };

    const regionSelectChange = (event) => {
        setSelectedRegion(event.target.value);
    }

    const fetchRankedData = async (act, region) => {
        setLoading(true);
        const apiUrl = `https://${region}.api.riotgames.com/val/ranked/v1/leaderboards/by-act/${act}?size=100&startIndex=0&api_key=${process.env.REACT_APP_API_KEY}`;

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
            setPlayers(data.players || []);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const getRegionName = (region) => {
        const regionNames = {
            na: "Norteamérica",
            eu: "Europa",
            ap: "Asia-Pacífico",
            kr: "Corea",
            br: "Brasil",
            latam: "Latinoamérica",
        };
        return regionNames[region] || "";
    };

    const getActName = (act) => {
        const actNames = {
            [process.env.REACT_APP_ACT_ID_E81]: "Episodio 8: Acto 1",
            [process.env.REACT_APP_ACT_ID_E82]: "Episodio 8: Acto 2",
            [process.env.REACT_APP_ACT_ID_E83]: "Episodio 8: Acto 3",
            [process.env.REACT_APP_ACT_ID_E91]: "Episodio 9: Acto 1",
        };
            return actNames[act] || "";
        }

    return (
        <div className="container overflow-x-auto bg-gray-900 text-white max-w-[1280px] m-auto mt-10 rounded">
            <div className="bg-[#1B2733]">
                <div className="p-5">
                    <h1 className="text-xl mb-4">
                        Clasificación competitiva de {getRegionName(selectedRegion)} en {getActName(selectedAct)}
                    </h1>
                    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3 lg:flex-row">
                        <select
                                name="regions"
                                id="regions"
                                className="mr-2 p-2 rounded bg-[#34495D]"
                                value={selectedRegion}
                                onChange={regionSelectChange}
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
                <LoadingSpinner />  
            ) : (
                <table className="table-auto min-w-full overflow-hidden">
                    <thead className="bg-gray-800 text-white/50 text-left">
                        <tr>
                            <th className="w-0 ">Posición</th>
                            <th className="">Jugador</th>
                            <th className="w-0 text-center">PR</th>
                            <th className="w-0 hidden sm:table-cell text-right">Rango</th>
                            <th className="w-0 hidden sm:table-cell">Victorias</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player, index) => (
                            <tr key={player.puuid} className={index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-700'}>
                                <td className="text-center">
                                    {player.leaderboardRank} 
                                </td>
                                <td className="text-start">
                                    {player.gameName === undefined ? 'Anónimo' : player.gameName}
                                    <span className="text-xs ml-2 text-white/75 font-[500] bg-[#2C353D]">
                                        {`#${player.tagLine}`}
                                    </span>   
                                </td>
                                <td className="">{player.rankedRating}</td>
                                <td className="hidden sm:table-cell">{player.competitiveTier === 27 ? ' Radiante' : '0'}</td>
                                <td className="hidden sm:table-cell px-4 py-2 text-center">{player.numberOfWins}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>


            )}
        </div>
    );
};

export default LeaderBoard;
