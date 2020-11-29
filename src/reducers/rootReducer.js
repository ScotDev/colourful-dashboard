const path = require('path');
const os = require("os");
const fs = require('fs');
const log = require('electron-log')

// Poorly named, rename
const settingsFilePath = path.join(os.homedir(), "/Documents/Predict");
const defaultPath = path.join(settingsFilePath, "userConfig.json");

const defaults = [{ "name": "notifications", "value": true }, { "name": "lightTheme", "value": true }, { "name": "reportOutputPath", "value": settingsFilePath + "/Reports" }]

const checkConfigDirectoryForLoad = (defaults) => {
    // If directory doesn't exists, create it.
    // Then create initial settings 
    try {
        fs.existsSync(defaultPath)
        console.log("Path already exists (reducer.js)")
        return loadDataFromFile();
    } catch (error) {
        console.log("Path created for first time")
        saveDataToFile(defaults)
        return defaults;
    }
}

const loadDataFromFile = () => {
    // File exists so load data from file
    // If file can't be read (file content)
    // Then return default settings
    try {
        const data = fs.readFileSync(defaultPath, 'utf-8')
        return JSON.parse(data);
    } catch (error) {
        log.error(error)
        saveDataToFile(defaults)
        return defaults;
    }
}

const saveDataToFile = (data) => {
    try {
        fs.writeFileSync(defaultPath, JSON.stringify(data))
        log.info("Config file updated")
    } catch (error) {
        log.error("Couldn't save data", data, error)
    }
}

const initialState = {
    settings: checkConfigDirectoryForLoad(defaults),
    API_data: [{}]
}

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
    if (action.type === "UPDATE_API_DATA") {
        console.log("State is: ", state)
        console.log("Action is: ", action)
        return {
            ...state,
            // This overwrites all the data, better to spread copy and add to
            API_data: action.payload
        }
    }


    return state;
}


export default rootReducer;
