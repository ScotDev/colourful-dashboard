
const saveDataToFile = (data) => {
    fs.writeFile(settingsFilePath + "/userConfig.json", JSON.stringify(data), function (err) {
        if (err) {
            log.error("Couldn't save data", data, err)
        };
        log.info("Config file updated")
    })
}
exports.saveDataToFile;