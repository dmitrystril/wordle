import React from "react";

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
        pattern="[a-zA-Z]{5}"
        minLength={5}
        maxLength={5}
        required={true}
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessForm;
