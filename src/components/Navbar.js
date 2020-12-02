import React, { useEffect } from 'react';
import { Route, MemoryRouter, NavLink } from 'react-router-dom';
const remote = require('electron').remote
import { ipcRenderer } from 'electron'
import { connect } from 'react-redux';
import { StyledNav, BrandLogo, BrandName, NavUsername, NavItem, NavMenu, NavStyledLink, AppActionsmenu, QuitButton, MaximiseButton, MinimiseButton } from '../ui-components/Navigation';


const currentUser = process.env.username;

import brand_logo from '../static/images/logo.svg'
import quitIcon from '../static/images/cancel.svg'
import maximiseIcon from '../static/images/maximize.svg'
import minimiseIcon from '../static/images/minimize.svg'

import Dashboard from './Dashboard'
import Settings from './Settings';
import Help from './Help';


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
      <StyledNav dark initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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
      </StyledNav>

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