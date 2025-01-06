import { useState } from "react";

const Game = () => {
  const [gameState] = useState({
    currentQuestion: null,
    score: 0,
  });

  return (
    <div className="game-page">
      <h2>BMC Game</h2>
      <div className="game-container">
        <div className="score">Score: {gameState.score}</div>
        <div className="score">
          Current question: {gameState.currentQuestion}
        </div>
        {/* Game content will go here */}
      </div>
    </div>
  );
};

export default Game;
