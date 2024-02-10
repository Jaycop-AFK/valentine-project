import { useState } from "react";

import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Really?",
  "Pookie pls?",
  "Don't do that!",
  "Im gonna cry",
  "U gonna break my heart!",
];
function App() {
  const [noCount, setnoCount] = useState(0);
  const [yesPressed, setyesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleClick() {
    setnoCount(noCount + 1);
  }
  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }
  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            src="https://media.tenor.com/WiQQRwR2QFAAAAAi/cute-panda.gif"
            alt="bear-hug"
          />
          <div className="text">Yay!!!!!!!</div>
        </>
      ) : (
        <>
          <img
            src="https://media.tenor.com/dIR5p38-V4EAAAAi/cry-maddrey-maddrey.gif"
            alt="bear"
          />
          <div>will you be my valentine??</div>
          <div>
            <button
              className="yesButton"
              style={{
                fontSize: yesButtonSize,
                backgroundColor: "green",
                color: "white",
              }}
              onClick={() => setyesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleClick}
              className="noButton"
              style={{ backgroundColor: "red", color: "white" }}
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
