
const { app, BrowserWindow, ipcMain, Notification, dialog, nativeImage } = require('electron');
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1600,
    height: 1000,
    title: "Dashboard",
    backgroundColor: '#D15438',
    frame: false,
    show: false,
    webPreferences: {
      enableRemoteModule: true,
      nodeIntegration: true
    }
  });


  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // mainWindow.maximize()

  // Helps with flash of no content
  mainWindow.once('ready-to-show', () => {

    mainWindow.show()
  })


  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
};



// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});


// Other custom commands

// When close button is clicked
ipcMain.on('quit', () => {
  dialog.showMessageBox(null, {
    type: "info",
    buttons: ['OK', 'Cancel'],
    defaultId: 0,
    cancelId: 1,
    title: 'Exit application',
    message: "Are you sure you want to quit?",
    detail: "Any unsaved data might be lost"
  }).then((data) => {
    if (data.response === 0) {
      app.quit()
    } else {
      console.log("App quit aborted by user")
    }
  }).catch(err => {
    console.log(err)
    dialog.showErrorBox('App quit error', 'There was an error quitting the application gracefully')
  })
})


const showNotification = () => {
  const img = nativeImage.createFromPath('src/static/images/logo.png')
  const details = {
    title: 'Predict minimised',
    body: 'The app is still running in the background',
    icon: img
  }
  new Notification(details).show()
}

ipcMain.on('notificationPrompt', () => {
  showNotification()
})