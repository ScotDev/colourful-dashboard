
const { app, BrowserWindow, ipcMain, Notification, dialog, nativeImage } = require('electron');
const path = require('path');
const fs = require('fs');
const os = require("os");
const log = require('electron-log');

// This might not work when built with webpack
// const Store = require('../Store');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}


let mainWindow;

// From Traversy Electron Udemy course. Buggy for whatever reason.
// let settingsFilePath = app.getPath(
//   'userData') + "\\" + "user-settings" + ".json";
let settingsFilePath = path.join(os.homedir(), "/Documents/Predict");
const defaults = JSON.stringify({ "settings": [{ "name": "notifications", "value": true }, { "name": "lightTheme", "value": true }, { "name": "reportOutputPath", "value": settingsFilePath + "/Reports" }] })


const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1650,
    height: 1000,
    title: "Dashboard",
    backgroundColor: '#171923',
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

  log.info("Application started")
  mainWindow.webContents.on("dom-ready", (e) => {
    mainWindow.webContents.send("settings:load")
  })

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialisation and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  createWindow()
}

);

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
      log.info("Application exited by user")
    } else {
      console.log("App quit aborted by user")
    }
  }).catch(err => {
    console.log(err)
    dialog.showErrorBox('App quit error', 'There was an error quitting the application gracefully')
    log.error("Application hard quit")
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
  log.info("Application minimised by user")
})


const checkConfigDirectoryForSave = (data) => {
  // If directory doesn't exists, create it.
  // Then save settings update
  fs.access(settingsFilePath, function (error) {
    if (error) {
      fs.mkdirSync(settingsFilePath)
      console.log("Directory created")
      saveDataToFile(data)
    } else {
      console.log("Directory exists (main.js)")
      saveDataToFile(data)
    }
  })
}


// This doesn't quite make sense. Which function is checking what
const saveDataToFile = (data) => {
  fs.writeFile(settingsFilePath + "/userConfig.json", JSON.stringify(data), function (err) {
    if (err) {
      log.error("Couldn't save data", data, err)
    };
    log.info("Config file updated")
  })
}

ipcMain.on('settings:update', (e, data) => {
  checkConfigDirectoryForSave(data.settings)
})