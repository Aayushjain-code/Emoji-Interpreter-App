import React, { useState } from "react";
import "./App.css";

function App() {
  const emojiDictionary = {
    "😊": "Smiling",
    "😳": "disbelief",
    "❤️": "love",
    "🥰": "Smiling face with hearts",
    "😎": "Smiling face with sunglasses",
    "😏": "Smirking face",
    "🚗": "Automobile",
    "🎂": "Cake",
    "😔": "sad"
  };
  const emojis = Object.keys(emojiDictionary);

  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);
    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("Emoji not found");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter App</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji"}
      />
      <h2> {emoji} </h2>
      <h3> {meaning} </h3>
      <div className="emojiDiv">
        {emojis.map((emoji) => (
          <span onClick={() => emojiClickHandler(emoji)}>{emoji}</span>
        ))}
      </div>
      <section class="footer">
        <p>Aayush Jain</p>
        <ul>
          <li>
            <a href="https://github.com/Aayushjain-code" alt="#">
              <i class="fab fa-github">&nbsp;Github</i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/aayush-jain-code/" alt="#">
              <i class="fab fa-linkedin">&nbsp;LinkedIn</i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/the_aayush_jain" alt="#">
              <i class="fab fa-twitter">&nbsp;Twitter</i>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
