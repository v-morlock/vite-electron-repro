import crypto from "crypto";

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
