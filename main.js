const electron = require('electron');
const url = require('url');
const path = require('path');
const { app, BrowserWindow, webFrame, Menu } = electron;

app.on('ready',function()
{
  app.win = new BrowserWindow({
    width : 700,
    height : 400,
    minWidth: 320,
    minHeight: 320,
    backgroundColor: '#000',
    //icon: path.join(__dirname, { darwin: 'icon.icns', linux: 'icon.png', win32: 'icon.ico' }[process.platform] || 'icon.ico'),
    resizable: true,
    frame: process.platform !== 'darwin',
    skipTaskbar: process.platform === 'darwin',
    autoHideMenuBar: process.platform === 'darwin',
    webPreferences: { zoomFactor: 1.0, nodeIntegration: true, backgroundThrottling: false }
  });
  app.win.loadURL(url.format({
    pathname: path.join(__dirname,'mainWindow.html'),
    protocol: 'file:',
    slashes: true
  }));
});
