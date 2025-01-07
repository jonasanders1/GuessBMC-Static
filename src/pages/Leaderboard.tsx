import { useState } from "react";
import "../styles/leaderboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faMedal, faAward } from "@fortawesome/free-solid-svg-icons";
import PageTitle from "../components/PageTitle/PageTitle";

type TimeFilter = "today" | "week" | "allTime";
export type LeaderboardEntry = {
  rank: number;
  username: string;
  score: number;
  date: string;
};

const Leaderboard = () => {
  const [activeFilter, setActiveFilter] = useState<TimeFilter>("today");
  const [nameFilter, setNameFilter] = useState<string>("");

  // Separate mock data for different time periods
  const mockData: Record<TimeFilter, LeaderboardEntry[]> = {
    today: [
      { rank: 1, username: "Jonas Andersen", score: 500, date: "2024-03-20" },
      { rank: 2, username: "Preben Andersen", score: 350, date: "2024-03-20" },
      { rank: 3, username: "Maria Hansen", score: 300, date: "2024-03-20" },
    ],
    week: [
      { rank: 1, username: "Maria Hansen", score: 2500, date: "2024-03-18" },
      { rank: 2, username: "Jonas Andersen", score: 2200, date: "2024-03-17" },
      { rank: 3, username: "Emma Jensen", score: 1800, date: "2024-03-15" },
      { rank: 4, username: "Preben Andersen", score: 1600, date: "2024-03-16" },
      { rank: 5, username: "Lars Nielsen", score: 1400, date: "2024-03-14" },
    ],
    allTime: [
      { rank: 1, username: "Emma Jensen", score: 15000, date: "2024-02-15" },
      { rank: 2, username: "Maria Hansen", score: 12500, date: "2024-01-20" },
      { rank: 3, username: "Jonas Andersen", score: 10800, date: "2024-03-10" },
      { rank: 4, username: "Lars Nielsen", score: 9500, date: "2024-02-28" },
      { rank: 5, username: "Preben Andersen", score: 8900, date: "2024-01-15" },
    ],
  };

  const getCurrentData = () => {
    const timeFilteredData = mockData[activeFilter] || [];
    if (!nameFilter) return timeFilteredData;

    return timeFilteredData.filter((entry) =>
      entry.username.toLowerCase().includes(nameFilter.toLowerCase())
    );
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <FontAwesomeIcon icon={faTrophy} className="rank-icon gold" />;
      case 2:
        return <FontAwesomeIcon icon={faMedal} className="rank-icon silver" />;
      case 3:
        return <FontAwesomeIcon icon={faAward} className="rank-icon bronze" />;
      default:
        return <span className="rank-number">#{rank}</span>;
    }
  };

  const filteredData = getCurrentData();

  return (
    <div className="leaderboard-page page">
      <div className="content-wrapper">
        <PageTitle
          title="Toppliste"
          description="Se hvem som har høyest score på BMC Quiz."
        />

        <div className="leaderboard-filters">
          <button
            className={`filter-btn ${activeFilter === "today" ? "active" : ""}`}
            onClick={() => setActiveFilter("today")}
          >
            I dag
          </button>
          <button
            className={`filter-btn ${activeFilter === "week" ? "active" : ""}`}
            onClick={() => setActiveFilter("week")}
          >
            Denne uken
          </button>
          <button
            className={`filter-btn ${
              activeFilter === "allTime" ? "active" : ""
            }`}
            onClick={() => setActiveFilter("allTime")}
          >
            Totalt
          </button>

          <input
            type="text"
            placeholder="Søk etter spiller..."
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
            className="name-filter-input"
          />
        </div>

        <div className="leaderboard-container">
          <div className="leaderboard-table-header">
            <span>Rank</span>
            <span>Spiller</span>
            <span>Poeng</span>
            <span className="hide-mobile">Dato</span>
          </div>
          {filteredData.length > 0 ? (
            <>
              {filteredData.map((entry, index) => (
                <div key={index} className="leaderboard-entry">
                  <span className="rank-column">{getRankIcon(entry.rank)}</span>
                  <span className="player-column">{entry.username}</span>
                  <span className="score-column">{entry.score}</span>
                  <span className="date-column hide-mobile">{entry.date}</span>
                </div>
              ))}
            </>
          ) : (
            <div className="no-results">
              <p>Ingen spillere funnet med navnet "{nameFilter}"</p>
              <p>Prøv et annet søk eller fjern filteret</p>
            </div>
          )}

          {/* Bottom rows for positions */}
          <div className="leaderboard-bottom-info">
            <div className="your-position">
              <span>Din posisjon:</span>
              <span>#42</span>
            </div>
            <div className="total-players">
              <span>Totalt antall spillere:</span>
              <span>156</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
