import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CV from "./Gavin Cao.pdf";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="title">Hey! It's me! Gavin!</div>

        <a href={CV} target="_blank" rel="noopener noreferrer" download>
          Download My CV
        </a>

        <a
          href="https://github.com/gcao417"
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub Page
        </a>

        <a
          href="https://www.linkedin.com/in/gavin-cao-2a56381b8/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My LinkedIn
        </a>

        <a
          href="mailto:gavincao2017@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email Me
        </a>
      </div>
    </div>
  );
}

export default App;

// npm run deploy
// npm start
// type rfc+enter to create template for js file
