import { useState } from "react";

const Leaderboard = () => {
  const [leaderboardData] = useState([
    {
      rank: "1",
      username: "Jonas Andersen",
      score: 500,
    },
    {
      rank: "2",
      username: "Preben Andersen",
      score: 350,
    },
  ]);

  return (
    <div className="leaderboard-page page">
      <h2>Leaderboard</h2>
      <div className="leaderboard-container">
        {leaderboardData.map((entry, index) => (
          <div key={index} className="leaderboard-entry">
            <span>{entry.rank}</span>
            <span>{entry.username}</span>
            <span>{entry.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
