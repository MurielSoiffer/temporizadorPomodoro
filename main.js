const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 400,
      height: 500,
      backgroundColor: '#ffffff',
      icon: __dirname + '/img/tomate.png',
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
      },
      // resizable: false,
      autoHideMenuBar: true,
    })
  
    win.loadFile('html/index.html')
  }

  app.whenReady().then(() => {
    createWindow()
  })