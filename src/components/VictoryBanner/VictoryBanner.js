import React from "react";

function VictoryBanner({ numOfAttempts }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{numOfAttempts} guesses</strong>.
      </p>
    </div>
  );
}

export default VictoryBanner;
