import React from "react";

function WordForm() {
  const [word, setWord] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Submitted word: ", word);

    setWord("");
  };

  return (
    <form class="guess-input-wrapper" onSubmit={handleSubmit}>
      <label for="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="[a-zA-Z]{5}"
        minLength={5}
        maxLength={5}
        required={true}
        value={word}
        onChange={(event) => setWord(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default WordForm;
