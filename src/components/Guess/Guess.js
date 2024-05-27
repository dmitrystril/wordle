import React from "react";

import { MAX_WORD_LENGTH } from "../../constants";
import { range } from "../../utils";

function Guess({ guess }) {
  const wordIndexes = range(0, MAX_WORD_LENGTH);

  return (
    <p className="guess">
      {wordIndexes.map((index) => (
        <span key={index} className="cell">
          {guess && guess[index]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
