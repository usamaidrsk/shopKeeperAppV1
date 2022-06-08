const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');
// @ts-ignore
let appWindow

function initWindow() {
    appWindow = new BrowserWindow({
      width: 1200,
      height: 1000,
      webPreferences: {
        nodeIntegration: true,
        webSecurity: false
      }
    });

    // Electron Build Path

    // appWindow.loadFile(`file://${__dirname}/dist/index.html`);

    appWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, `/dist/index.html`),
        protocol: "file:",
        slashes: true
      })
    );

    // Initialize the DevTools.
    appWindow.webContents.openDevTools();

    appWindow.on('closed', () => {
      appWindow = null;
    });
  }

app.on('ready', initWindow);

  // Close when all windows are closed.
app.on('window-all-closed', () => {

    // On macOS specific close process
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

app.on('activate', () => {
    // @ts-ignore
    if (appWindow === null) {
      initWindow();
    }
  });
