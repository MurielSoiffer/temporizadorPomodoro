const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 400,
      height: 500,
      backgroundColor: '#ffffff',
      resizable: false,
      autoHideMenuBar: true,
    })
  
    win.loadFile('index.html')
  }

  app.whenReady().then(() => {
    createWindow()
  })