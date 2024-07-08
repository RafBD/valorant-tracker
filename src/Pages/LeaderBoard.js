import React from "react";

const LeaderBoard = ({ players }) => {
    return (
        <div className="overflow-x-auto bg-gray-900 text-white min-h-screen p-8">
            <h1 className="text-xl font-bold text-center mb-4">
                North America Competitive Ranked Rating for Episode 9 - Act 1 LeaderBoard
            </h1>
            {/* Form to select the act that you want to see the leaderboard for (optional) */}
            
            {/* <form action="/" method="POST" className="m-auto flex mb-4">
                <label htmlFor="acts" className="mr-2">Elige el acto:</label>
                <select name="acts" id="acts" className="mr-2 p-2 rounded">
                    <option value="97b6e739-44cc-ffa7-49ad-398ba502ceb0">ACT 1</option>
                    <option value="ab57ef51-4e59-da91-cc8d-51a5a2b9b8ff">ACT 2</option>
                    <option value="52e9749a-429b-7060-99fe-4595426a0cf7">ACT 3 (Current)</option>
                </select>
                <input type="submit" value="Choose" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer" />
            </form> */}

            <table className="table-auto min-w-full overflow-hidden border border-white/50 text-center">
                <thead className="bg-gray-800 text-white/50">
                    <tr>
                        <th className="px-4 py-2">Rank</th>
                        <th className="px-4 py-2">Player</th>
                        <th className="px-4 py-2">Ranked Rating</th>
                        <th className="px-4 py-2">Tier</th>
                        <th className="px-4 py-2">Wins</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, index) => (
                        <tr key={player.puuid} className={index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-700'}>
                            <td className="px-4 py-2">{player.leaderboardRank}</td>
                            <td className="px-4 py-2">{player.gameName}</td>
                            <td className="px-4 py-2">{player.rankedRating}</td>
                            <td className="px-4 py-2">{player.rankedTier}</td>
                            <td className="px-4 py-2">{player.numberOfWins}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LeaderBoard;