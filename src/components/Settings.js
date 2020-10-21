import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { dialog, remote } from 'electron';

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

const SelectionBtn = styled.button`
border-radius:10px;
border: 2px solid #fff;
color:#fff;
background-color:#C73664;
padding:0.5rem 1rem;
margin: 0.5rem 0;
font-size:1.25rem;

transition:background-color 0.05s ease-in;

&:hover, &:focus{
    background-color:#5e5c5c;
    outline:none;
}
`

const RadioGroup = styled.fieldset`
display:flex;
flex-direction:column;
margin-bottom:1rem;
border:none;
outline:none;
`
const OptionGroup = styled.div`
display:flex;
align-items:center;
margin-bottom:0.75rem;
`

// Custom styles required
const RadioBtn = styled.input`
`
const OptionLabel = styled.label`
font-size:1.25rem;
margin-left:1rem;
`

const Toggle = styled.input`
border:2px solid #fff
`


export default function Settings() {
    let initialPath = path.join(os.homedir(), "/Documents/Predict/Reports")

    const [outputPath, setOutputPath] = useState(null)


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


    // Component state doesn't persist on navigation, I guess this is fine if I can write to redux store/save config to json before navigating away

    // Is mounted workaround not recommeneded and doesn't seem to work. Redux may fix this by removing component level state altogether
    useEffect(() => {
        console.log("UseEffect ran")
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
            <RadioGroup>
                <OptionGroup>
                    <RadioBtn id="light" name="light" type={"radio"} checked></RadioBtn>
                    <OptionLabel htmlFor="light">Light theme</OptionLabel>
                </OptionGroup>
                <OptionGroup>
                    <RadioBtn id="dark" name="dark" type={"radio"} disabled></RadioBtn>
                    <OptionLabel htmlFor="dark">Dark theme</OptionLabel>
                </OptionGroup>
            </RadioGroup>

            <SectionTitle>Output directory</SectionTitle>
            <SectionText>{outputPath}</SectionText>
            <SelectionBtn onClick={() => { checkOutputDirectory() }}>Browse...</SelectionBtn>

            <SectionTitle>Notifications</SectionTitle>
            <OptionGroup>
                <Toggle name="notifications" id="notifications" type="checkbox"></Toggle>
                <OptionLabel htmlFor="notifications">On</OptionLabel>
            </OptionGroup>

            <Divider></Divider>

        </Content>
    )
}
