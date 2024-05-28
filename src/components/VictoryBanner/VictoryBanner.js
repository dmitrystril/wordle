import React from "react";

function VictoryBanner({ numOfAttempts, restartGame }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{numOfAttempts} guesses</strong>.
      </p>

      <button onClick={restartGame}>Restart Game</button>
    </div>
  );
}

export default VictoryBanner;
