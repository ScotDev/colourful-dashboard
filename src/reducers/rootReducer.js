const path = require('path');
const os = require("os");
const fs = require('fs');

import { ipcRenderer } from 'electron';

let settingsFilePath = path.join(os.homedir(), "/Documents/Predict");
const defaultPath = path.join(settingsFilePath, "userConfig.json");

const defaults = JSON.stringify({ "settings": [{ "name": "notifications", "value": true }, { "name": "lightTheme", "value": true }, { "name": "reportOutputPath", "value": settingsFilePath + "/Reports" }] })

ipcRenderer.on("settings:load", (e) => {
    checkConfigDirectoryForLoad()
})


const checkConfigDirectoryForLoad = (defaults) => {
    // If directory doesn't exists, create it.
    // Then create initial settings 
    fs.access(settingsFilePath, function (error) {
        if (error) {
            fs.mkdirSync(settingsFilePath)
            console.log("Directory created for first time")
            saveDataToFile(defaults)
            return defaults;
        } else {
            console.log("Directory already exists")
            loadDataFromFile();
        }
    })
}

const loadDataFromFile = () => {
    fs.readFile(defaultPath, (err, data) => {
        if (err) {
            console.log(Err, "Error loading from file")
        }
        console.log("rawdata:", JSON.parse(data))
        return JSON.parse(data);
    }
    )
}

const saveDataToFile = (data) => {
    fs.writeFile(defaultPath, JSON.stringify(data), function (err) {
        if (err) {
            log.error("Couldn't save data", data, err)
        };
        log.info("Config file updated")
    })
}



// const initialState = {
//     settings: [{ name: "notifications", value: true }, { name: "lightTheme", value: true }, { name: "reportOutputPath", value: path.join(os.homedir(), "/Documents/Predict/Reports") }]
// }

// const initialState = 

const rootReducer = (state = initialState, action) => {
    if (action.type === "UPDATE_SETTING") {

        console.log("State is: ", state)
        console.log("Action is: ", action)
        return {
            ...state,
            settings: state.settings.map(setting => {
                if (setting.name !== action.payload.settingName) {
                    return setting
                }

                return {
                    ...setting,
                    value: action.payload.settingValue
                }
            })


        }

    }
    return state;
}


export default rootReducer;




