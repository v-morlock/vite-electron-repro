import crypto from "crypto";
import fs from "fs";
export function checkForCrypto() {
  // @ts-ignore
  if (crypto.pbkdf2Sync) {
    console.log("crypto seems to be fine");
    console.log(crypto);
  } else {
    console.log("crypto has no method pbkdf2Sync");
    console.log(crypto);
  }
}

export function checkForFS() {
  // @ts-ignore
  if (fs.readFileSync) {
    console.log("fs seems to be fine");
    console.log(fs);
  } else {
    console.log("fs has no method readFileSync");
    console.log(fs);
  }
}
