import { useState } from "react";
import bmcData from "../Data/bmc.json";
import "../styles/game.css";
import CustomButton from "../components/customButton/CustomButton";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Game = () => {
  const [gameState, setGameState] = useState({
    userInput: "",
    score: 0,
    currentQuestion: 1,
    totalQuestions: 10
  });

  // Add state for tracking which elements are expanded
  const [expandedElements, setExpandedElements] = useState<string[]>([]);

  // Toggle expansion of an element
  const toggleElement = (elementId: string) => {
    setExpandedElements(prev => 
      prev.includes(elementId) 
        ? prev.filter(id => id !== elementId)
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
      <h2>Guess the Company</h2>
      <div className="game-container">
        <div className="score-container">
          <div className="score">Score: {gameState.score}</div>
          <div className="progress">
            Question {gameState.currentQuestion} of {gameState.totalQuestions}
          </div>
        </div>

        <div className="bmc-grid">
          {bmcElements.map((element) => (
            <div 
              key={element.id} 
              className={`bmc-element ${expandedElements.includes(element.id) ? 'expanded' : ''}`}
              onClick={() => toggleElement(element.id)}
            >
              <div className="bmc-header">
                <h3>{element.title}:</h3>
                <div className="expand-icon">
                <FontAwesomeIcon icon={expandedElements.includes(element.id) ? faChevronUp : faChevronDown} />
                </div>
              </div>
              <ul className="bmc-content">
                {bmcData.bmc[element.id as keyof typeof bmcData.bmc].map(
                  (item, index) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

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
            text="Submit Guess"
            onClick={() => handleSubmit}
            flex={false}
          />
        </form>
      </div>
    </div>
  );
};

export default Game;
