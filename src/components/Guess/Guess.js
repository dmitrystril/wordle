import React from "react";

import { MAX_WORD_LENGTH } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const guessResult = checkGuess(guess, answer);
  // example: [..., { letter: 'H', status: 'correct' }]

  if (!guessResult) {
    const letterIndexes = range(0, MAX_WORD_LENGTH);

    return (
      <p className="guess">
        {letterIndexes.map((index) => (
          <span key={index} className="cell"></span>
        ))}
      </p>
    );
  }

  return (
    <p className="guess">
      {guessResult.map(({ letter, status }, index) => (
        <span key={index} className={`cell ${status}`}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
