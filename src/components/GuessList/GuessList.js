import React from "react";

import Guess from "../Guess";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessList({ guessList }) {
  const guessListIndexes = range(0, NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {guessListIndexes.map((index) => {
        const guessItem = guessList[index];

        const id = guessItem?.id || index;
        const word = guessItem?.guess || null;

        return <Guess key={id} guess={word} />;
      })}
    </div>
  );
}

export default GuessList;
