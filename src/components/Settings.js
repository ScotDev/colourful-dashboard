import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Toggle from 'react-toggle';
import { ToastProvider, useToasts } from 'react-toast-notifications'
import { connect } from 'react-redux';

const log = require('electron-log')

import { dialog, remote, ipcRenderer } from 'electron';

const path = require('path');
const os = require("os");
const fs = require('fs');

import styled from 'styled-components';

const Content = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  padding: 1rem 1rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Rubik', sans-serif;
`

const PageTitle = styled.h1`
font-size:3rem;
font-weight:400;
`

const Divider = styled.hr`
border-bottom:2px solid #fff;
width:40%;
margin:1rem 0 0.5rem 0;
`

const SectionTitle = styled.h2`
font-size:2rem;
font-weight:400;
margin:1.5rem;
`
const SectionText = styled.p`
font-size:1.25rem;
margin-bottom:0.5rem;
`

const SelectionBtn = styled(motion.button)`
border-radius:10px;
border: 1px solid #fff;
color:#fff;
background-color:#C73664;
padding:0.5rem 1rem;
margin: 0.5rem 0;
font-size:1.25rem;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.3);

&:hover, &:focus{
    outline:none;
}
`
const OptionGroup = styled.div`
display:flex;
align-items:center;
margin-bottom:0.75rem;
`

const OptionLabel = styled.label`
font-size:1.25rem;
margin-left:1rem;
`

function Settings(props) {
    console.log(props)
    const { addToast } = useToasts()

    let initialPath = path.join(os.homedir(), "/Documents/Predict/Reports")

    const [outputPath, setOutputPath] = useState(null)
    const [notificationPreference, setNotificationPreference] = useState(true)
    const [themePreference, setThemePreference] = useState(null)


    // This does nothing right now
    const chooseOutputDirectory = () => {

        remote.dialog.showSaveDialog(null, {
            title: "Change output folder", defaultPath: outputPath, filters: [
            ]
        }).then(res => {
            if (res.canceled) {
                console.log("Dialog canceled")
            } else {
                // outputPath = res.filePath;
                setOutputPath(res.filePath);
            }

        }).catch(err => {
            console.log(err)
            dialog.showMessageBox(null, { title: "Folder selection error", message: "Error selecting folder, please try again", noLink: true })
                .then(res => {
                    console.log(res)
                }).catch(err => {
                    console.log(err)
                })
        })

        console.log(outputPath)
    }
    const checkOutputDirectory = () => {

        fs.access(outputPath, function (error) {
            if (error) {
                // fs.mkdirSync(outputPath)
                chooseOutputDirectory()
                console.log("Directory does not exist.")
            } else {
                console.log("Directory exists")
                chooseOutputDirectory()
            }
        })
    }

    // These two change handlers should be combined if possible
    const handleNotificationPreferenceChange = () => {
        if (notificationPreference === true) {
            setNotificationPreference(false)
        } else {
            setNotificationPreference(true)
        }
        ipcRenderer.send('settings:set', ({ "theme": themePreference, "notifications": notificationPreference }))
        addToast('Notifications preference saved successfully', { appearance: 'success' })
    }

    const handleThemePreferenceChange = () => {
        if (themePreference === "Light") {
            setThemePreference("Dark")
        } else {
            setThemePreference("Light")
        }

        ipcRenderer.send('settings:set', ({ "theme": themePreference, "notifications": notificationPreference })
        )

        addToast('Theme preference saved successfully', { appearance: 'success' })

    }

    // ipcRenderer.on('settings:get', (e, settings) => {
    //     // setNotificationPreference(settings.notifications)
    //     // setThemePreference(settings.theme)
    //     console.log("Received settings in component:", settings, settings.notifications, settings["theme"])
    // })



    // Is mounted workaround not recommeneded and doesn't seem to work. Redux may fix this by removing component level state altogether
    useEffect(() => {

        let isMounted = true;



        if (isMounted) {
            setOutputPath(initialPath)
        }
        return () => {
            console.log("Cleanup ran")
            isMounted = false;
        }
    }, [])


    return (
        <Content initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <PageTitle>User preferences</PageTitle>
            <Divider></Divider>
            <SectionTitle>Theme colour</SectionTitle>

            <OptionGroup>
                <Toggle
                    icons={false}
                    id='theme-preference'
                    className="theme-toggle"
                    defaultChecked={themePreference === "Light" ? true : false}
                    onChange={() => handleThemePreferenceChange()}
                />
                <OptionLabel htmlFor='theme-preference'>{themePreference}</OptionLabel>
            </OptionGroup>


            <SectionTitle>Output directory</SectionTitle>
            <SectionText>{outputPath}</SectionText>
            <SelectionBtn initial={{ y: 0 }} whileHover={{ y: -2, origin: 0, boxShadow: "0 8px 16px 0 rgba(0,0,0,0.6)", cursor: "pointer" }} transition={{
                duration: 0.1,
                type: "Inertia",
                stiffness: 500
            }} onClick={() => { checkOutputDirectory() }}>Browse...</SelectionBtn>

            <SectionTitle>Notifications</SectionTitle>
            {/* <OptionGroup>
                <Toggle name="notifications" id="notifications" type="checkbox"></Toggle>
                <OptionLabel htmlFor="notifications">On</OptionLabel>
            </OptionGroup> */}
            <OptionGroup>
                <Toggle
                    id='notification-preference'
                    defaultChecked={notificationPreference}
                    onChange={() => handleNotificationPreferenceChange()}
                />
                <OptionLabel htmlFor='notification-preference'>{notificationPreference ? "On" : "Off"}</OptionLabel>
            </OptionGroup>

            <Divider></Divider>

        </Content>
    )
}


const mapStateToProps = state => {
    return {
        settings: state.settings
    }
}

export default connect(mapStateToProps)(Settings);