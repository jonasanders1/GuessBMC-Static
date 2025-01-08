import { useState, useEffect } from "react";
import bmcData from "../Data/bmc.json";
import "../styles/game.css";
import CustomButton from "../components/customButton/CustomButton";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BMCGrid from "../components/BMCGrid/BMCGrid";
import BMCElement from "../components/BMCElement/BMCElement";
import BMCItem from "../components/BMCItem/BMCItem";
import PageTitle from "../components/PageTitle/PageTitle";
import { navigateAndScroll } from "../utils/navigation";
import { useNavigate } from "react-router-dom";

const Game = () => {
  const [gameState, setGameState] = useState({
    userInput: "",
    score: 0,
    currentQuestion: 1,
    totalQuestions: 10,
    isStarted: false,
    time: 0,
  });

  const navigate = useNavigate();

  // Timer functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameState.isStarted) {
      interval = setInterval(() => {
        setGameState((prev) => ({ ...prev, time: prev.time + 1 }));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameState.isStarted]);

  // Format time
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
    return "00:00";
  };

  // Start game
  const handleStart = () => {
    setGameState((prev) => ({ ...prev, isStarted: true }));
  };

  // Track which elements are expanded
  const [expandedElements, setExpandedElements] = useState<string[]>([]);

  // Toggle expansion of an element
  const toggleElement = (elementId: string) => {
    setExpandedElements((prev) =>
      prev.includes(elementId)
        ? prev.filter((id) => id !== elementId)
        : [...prev, elementId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Check if user's guess matches the company name (case insensitive)
    if (gameState.userInput.toLowerCase() === bmcData.company.toLowerCase()) {
      setGameState((prev) => ({
        ...prev,
        score: prev.score + 1,
        userInput: "",
      }));
    }
  };

  const bmcElements = [
    { title: "Key Partners", id: "key_partners" },
    { title: "Key Activities", id: "key_activities" },
    { title: "Key Resources", id: "key_resources" },
    { title: "Value Proposition", id: "value_proposition" },
    { title: "Customer Relationships", id: "customer_relationships" },
    { title: "Channels", id: "channels" },
    { title: "Customer Segments", id: "customer_segments" },
    { title: "Cost Structure", id: "cost_structure" },
    { title: "Revenue Streams", id: "revenue_streams" },
  ];

  return (
    <div className="game-page page">
      {!gameState.isStarted && (
        <div className="modal-overlay">
          <div className="start-modal">
            <div>
              <h2>Er du klar for å teste dine BMC kunnskaper?</h2>
              <p>
                Tiden vil starte når du trykker på start. Du har 10 minutter til
                å svare på spørsmålene.
              </p>
            </div>
            <div className="start-modal-buttons">
              <CustomButton
                text="Start Guess BMC"
                onClick={handleStart}
                flex={true}
              />
              <CustomButton
                text="Avbryt"
                buttonColor="var(--action-error)"
                onClick={() => navigateAndScroll(navigate, "/")}
                flex={true}
              />
            </div>
          </div>
        </div>
      )}

      <div
        className={`content-wrapper game-content ${
          gameState.isStarted ? "active" : ""
        }`}
      >
        <PageTitle
          title="BMC Quiz"
          description="Svar på spørsmålene for å teste dine kunnskaper om BMC."
        />

        <div className="score-container">
          <div className="score">Score: {gameState.score}</div>
          <div className="timer">{formatTime(gameState.time)}</div>
          <div className="progress">
            {gameState.currentQuestion} of {gameState.totalQuestions}
          </div>
        </div>

        <BMCGrid>
          {bmcElements.map((element) => (
            <BMCElement
              key={element.id}
              title={element.title}
              isExpanded={expandedElements.includes(element.id)}
              onToggle={() => toggleElement(element.id)}
            >
              <BMCItem bmcData={bmcData} element={element} />
            </BMCElement>
          ))}
        </BMCGrid>

        <form onSubmit={handleSubmit} className="guess-form">
          <input
            type="text"
            value={gameState.userInput}
            onChange={(e) =>
              setGameState((prev) => ({ ...prev, userInput: e.target.value }))
            }
            placeholder="Which company is this?"
            className="guess-input"
          />
          <CustomButton
            text="Submit"
            icon={<FontAwesomeIcon icon={faCheck} />}
            onClick={() => handleSubmit}
            flex={false}
          />
        </form>
      </div>
    </div>
  );
};

export default Game;
