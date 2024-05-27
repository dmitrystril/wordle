import React from "react";

import GuessForm from "../GuessForm";
import GuessList from "../GuessList";
import VictoryBanner from "../VictoryBanner";
import DefeatBanner from "../DefeatBanner";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  let isGuessCorrect = false;
  if (guessList.length > 0) {
    isGuessCorrect = guessList.at(-1).guess === answer;
  }

  const hasUserWon =
    isGuessCorrect && guessList.length <= NUM_OF_GUESSES_ALLOWED;

  const hasUserLost =
    !isGuessCorrect && guessList.length >= NUM_OF_GUESSES_ALLOWED;

  const isGameOver = hasUserWon || hasUserLost;

  return (
    <>
      <GuessList guessList={guessList} answer={answer} />

      <GuessForm
        addGuessToList={(guess) => setGuessList([...guessList, guess])}
        disabled={isGameOver}
      />

      {hasUserWon && <VictoryBanner numOfAttempts={guessList.length} />}

      {hasUserLost && <DefeatBanner answer={answer} />}
    </>
  );
}

export default Game;
