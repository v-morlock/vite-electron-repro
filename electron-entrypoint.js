const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    webPreferences: {
      // the dev api is not allowing localhost:3000 right now
      webSecurity: process.env.NODE_ENV !== "development",

      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,

      // otherwise a deprecation warning will be shown
      nativeWindowOpen: true,
    },
  });

  win.webContents.session.clearCache();

  if (process.env.NODE_ENV === "development") {
    win.loadURL("http://localhost:3000");
  } else {
    win.loadFile(path.join("dist", "index.html"));
  }
  win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();
});
