const {app, BrowserWindow} = require('electron');
const path = require('path');

function createWindow () {

  const mainWindow = new BrowserWindow({
    width: 1400,
    height: 1200,
    icon: __dirname + '/src/images/icon.jpg'
  });

  mainWindow.loadURL('http://localhost:3000');

};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
});
