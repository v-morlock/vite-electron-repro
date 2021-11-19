import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import crypto from "crypto";

import { checkForCrypto } from "dependency-with-crypto";

function App() {
  console.log(checkForCrypto);
  return (
    <div className="App">
      <button onClick={() => checkForCrypto()}>
        Check for crypto in dependency
      </button>

      <button
        onClick={() => {
          // @ts-ignore
          if (crypto.pbkdf2Sync) {
            console.log("crypto seems to be fine");
            console.log(crypto);
          } else {
            console.log("crypto has no method pbkdf2Sync");
            console.log(crypto);
          }
        }}
      >
        Check for crypto in app
      </button>
    </div>
  );
}

export default App;
