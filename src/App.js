import React from "react";
import "./App.css";
import CV from "./Assets/Gavin Cao.pdf";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <b className="title">Hey! It's me! Gavin!</b>

        <a
          href={CV}
          target="_blank"
          rel="noopener noreferrer"
          download={"Gavin Cao.pdf"}
        >
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

        <div>
          <div style={{ marginTop: 20 }}>Mobile App: Popfilm</div>
          <div className="mobileOptionContainer">
            <a
              className="mobileOption"
              href="https://play.google.com/store/apps/details?id=com.amillionstar.popfilm&hl=en&gl=US"
              target="_blank"
              rel="noopener noreferrer"
            >
              Android
            </a>

            <a
              className="mobileOption"
              href="https://apps.apple.com/nz/app/popfilm/id6446820250"
              target="_blank"
              rel="noopener noreferrer"
            >
              IOS
            </a>
          </div>
        </div>

        {/* <a href="BlackJack" rel="noopener noreferrer">
          🃏
        </a> */}
      </div>
    </div>
  );
}

export default App;

// npm run deploy
// npm start
// type rfce+enter to create template for js file
