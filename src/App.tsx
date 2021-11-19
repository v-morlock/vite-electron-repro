import "./App.css";
import crypto from "crypto";
import fs from "fs";

import { checkForCrypto, checkForFS } from "dependency-with-crypto";

function App() {
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
      <br />
      <button onClick={() => checkForFS()}>Check for fs in dependency</button>

      <button
        onClick={() => {
          // @ts-ignore
          if (fs.readFileSync) {
            console.log("fs seems to be fine");
            console.log(fs);
          } else {
            console.log("fs has no method readFileSync");
            console.log(fs);
          }
        }}
      >
        Check for fs in app
      </button>
    </div>
  );
}

export default App;
