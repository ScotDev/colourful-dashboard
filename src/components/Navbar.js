import React, { useEffect } from 'react';
import { Route, MemoryRouter, NavLink } from 'react-router-dom';
const remote = require('electron').remote
import { ipcRenderer } from 'electron'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { connect } from 'react-redux';

const currentUser = process.env.username;

import brand_logo from '../static/images/logo.svg'
import quitIcon from '../static/images/cancel.svg'
import maximiseIcon from '../static/images/maximize.svg'
import minimiseIcon from '../static/images/minimize.svg'

import Dashboard from './Dashboard'
import Settings from './Settings';
import Help from './Help';

const StyledNavbar = styled(motion.nav)`
  padding: 0.5rem 2rem;
  display: flex;
  background: transparent;
  color: #fff;
  align-items: center;
  font-family: 'Rubik', sans-serif;
      /* Allows frameless, draggable window */
  /* https://www.electronjs.org/docs/api/frameless-window */
  -webkit-app-region: drag;

`

const BrandLogo = styled.img`
  height: 50px;
  width: 50px;
  -webkit-app-region: no-drag;
`

const BrandName = styled.p`
  font-size: 1.5rem;
  padding-left: 0.75rem;
  -webkit-app-region: no-drag;
`

const NavUsername = styled.p`
  padding-left: 3rem;
  font-size: 1.25rem;
  -webkit-app-region: no-drag;
`

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  margin: 0 1rem 0 auto;
  list-style-type: none;
  -webkit-app-region: no-drag;
  `
const NavItem = styled.li`
  padding: 0 0.75rem;
  -webkit-app-region: no-drag;
`

const NavStyledLink = styled.p`
&:hover, &:focus{
  border-bottom: 2px solid white;
}

border-bottom:2px solid;
border-color: ${props => props.active ? "white" : "transparent"};
-webkit-app-region: no-drag;
text-decoration: none;
cursor: pointer;
`

const AppActionsmenu = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 0.25rem 0 0 3rem;
  list-style-type: none;
  -webkit-app-region: no-drag;
  `

const QuitButton = styled.img`
height: 1.5rem;
width: 1.5rem;
background-color: transparent;
-webkit-app-region: no-drag;

&:hover, &:focus{
  cursor: pointer;
}
`
const MinimiseButton = styled.img`
height: 0.5rem;
width: 1.5rem;
margin-right: 1.75rem;
padding:1rem 0 0 0;
background-color: transparent;
-webkit-app-region: no-drag;
border-bottom: 2px solid white;

&:hover, &:focus{
  cursor: pointer;
}
`
const MaximiseButton = styled.img`
height: 1.5rem;
width: 1.75rem;
margin-right: 1rem;
background-color: transparent;
-webkit-app-region: no-drag;

&:hover, &:focus{
  cursor: pointer;
}
`


function Navbar(props) {

  const handleMinimise = () => {
    console.log(props.settings[0].value)
    if (props.settings[0].value) {
      ipcRenderer.send('notificationPrompt')
    } else {
      console.log("Notifications disabled")
    }
  }

  useEffect(() => {
    if (document) {
      document.getElementById('minimizeBtn').addEventListener("click", () => remote.getCurrentWindow().minimize())
      document.getElementById('maximizeBtn').addEventListener("click", () => remote.getCurrentWindow().maximize())
    }
    return () => {
      document.getElementById('minimizeBtn').removeEventListener("click", () => remote.getCurrentWindow().minimize())
      document.getElementById('maximizeBtn').removeEventListener("click", () => remote.getCurrentWindow().maximize())
    }
  }, [])

  return (
    <MemoryRouter>
      <StyledNavbar initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <BrandLogo src={brand_logo}></BrandLogo>
        <BrandName>Predict</BrandName>

        <NavUsername>{currentUser}</NavUsername>

        <NavMenu>
          <NavItem>
            <NavStyledLink>
              <NavLink to="/dashboard">
                Home
          </NavLink>
            </NavStyledLink>
          </NavItem>
          <NavItem>
            <NavStyledLink>Forecasts</NavStyledLink>
          </NavItem>
          <NavItem>
            <NavStyledLink>Inventory</NavStyledLink>
          </NavItem>
          <NavItem>
            <NavStyledLink>
              <NavLink to="/settings">Settings</NavLink>
            </NavStyledLink>

          </NavItem>
          <NavItem>
            <NavStyledLink>
              <NavLink to="/help">Help</NavLink>
            </NavStyledLink>
          </NavItem>
          <AppActionsmenu>
            <MaximiseButton id="maximizeBtn" src={maximiseIcon}></MaximiseButton>
            <MinimiseButton id="minimizeBtn" src={minimiseIcon} onClick={() => handleMinimise()}></MinimiseButton>
            <QuitButton id="quitBtn" src={quitIcon} onClick={() => ipcRenderer.send('quit')}></QuitButton>
          </AppActionsmenu>
        </NavMenu>
      </StyledNavbar>

      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/help" component={Help} />
    </MemoryRouter>
  )
}

const mapStateToProps = state => {
  return {
    settings: state.settings
  }
}

export default connect(mapStateToProps)(Navbar);