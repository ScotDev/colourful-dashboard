const initialState = {
    settings: [{ name: "notifications", value: true }, { name: "lightTheme", value: true }]
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
    return state;
}

export default rootReducer;