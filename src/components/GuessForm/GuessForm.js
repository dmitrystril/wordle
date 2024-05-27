import React from "react";

import { MAX_WORD_LENGTH } from "../../constants";

function GuessForm({ addGuessToList }) {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    addGuessToList({ id: crypto.randomUUID(), guess });

    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>

      <input
        id="guess-input"
        type="text"
        pattern={`[a-zA-Z]{${MAX_WORD_LENGTH}}`}
        minLength={5}
        maxLength={MAX_WORD_LENGTH}
        required={true}
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessForm;
