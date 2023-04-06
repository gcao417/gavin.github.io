import React from "react";
import "./App.css";
import CV from "./Gavin Cao.pdf";

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

        <div style={{ marginTop: 20 }}>Mobile App</div>
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
            // href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            IOS
            <br />
            (not yet)
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

// npm run deploy
// npm start
// type rfc+enter to create template for js file
