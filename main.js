const {app, BrowserWindow} = require('electron');


function createWindow () {
  const win = new BrowserWindow({
    width: 400,
    height: 600,
  });

  win.loadFile('app.html');
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();

});

