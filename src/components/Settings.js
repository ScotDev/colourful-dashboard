import React from 'react';
import { motion } from 'framer-motion';
import Toggle from 'react-toggle';
import { ToastProvider, useToasts } from 'react-toast-notifications'
import { connect } from 'react-redux';

const log = require('electron-log')

import { dialog, remote } from 'electron';

// const path = require('path');
// const os = require("os");
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
    const { addToast } = useToasts()
    console.log(props)

    // This does nothing right now
    const chooseOutputDirectory = () => {
        remote.dialog.showSaveDialog(null, {
            title: "Change output folder", defaultPath: props.settings[2].value, filters: [
            ]
        }).then(res => {
            if (res.canceled) {
                log.info("User canceled save dialogue")
            } else {
                props.updateSettings("reportOutputPath", res.filePath)
            }

        }).catch(err => {
            console.log(err)
            dialog.showMessageBox(null, { title: "Folder selection error", message: "Error selecting folder, please try again", noLink: true })
                .then(res => {
                    log.error("Error saving folder path", res)
                }).catch(err => {
                    log.error("Error saving folder path", err)
                })
        })
    }
    const checkOutputDirectory = () => {

        fs.access(props.settings[2].value, function (error) {
            if (error) {
                fs.mkdirSync(props.settings[2].value)
                chooseOutputDirectory()
                console.log("Directory does not exist.")
            } else {
                console.log("Directory exists")
                chooseOutputDirectory()
            }
        })
    }

    const handleSettingChange = (e) => {
        props.updateSettings(e.target.name, e.target.checked)
        addToast('Preference saved successfully', { appearance: 'success' })
    }

    return (
        <Content initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <PageTitle>User preferences</PageTitle>
            <Divider></Divider>
            <SectionTitle>Theme colour</SectionTitle>

            <OptionGroup>
                <Toggle
                    icons={false}
                    id='theme-preference'
                    name="lightTheme"
                    className="theme-toggle"
                    defaultChecked={props.settings[1].value}
                    onChange={(e) => handleSettingChange(e)}
                />
                <OptionLabel htmlFor='theme-preference'>{props.settings[1].value ? "Light" : "Dark"}</OptionLabel>
            </OptionGroup>


            <SectionTitle>Output directory</SectionTitle>
            <SectionText>{props.settings[2].value}</SectionText>
            <SelectionBtn initial={{ y: 0 }} whileHover={{ y: -2, origin: 0, boxShadow: "0 8px 16px 0 rgba(0,0,0,0.6)", cursor: "pointer" }} transition={{
                duration: 0.1,
                type: "Inertia",
                stiffness: 500
            }} onClick={() => { checkOutputDirectory() }}>Browse...</SelectionBtn>

            <SectionTitle>Notifications</SectionTitle>

            <OptionGroup>
                <Toggle
                    id='notification-preference'
                    name="notifications"
                    defaultChecked={props.settings[0].value}
                    onChange={(e) => handleSettingChange(e)}
                />
                <OptionLabel htmlFor='notification-preference'>{props.settings[0].value ? "On" : "Off"}</OptionLabel>
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

const mapDispatchToProps = (dispatch) => {
    return {
        updateSettings: (settingName, settingValue) => { dispatch({ type: "UPDATE_SETTING", payload: { settingName, settingValue } }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);