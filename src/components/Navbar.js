import React, { useEffect } from 'react';
const remote = require('electron').remote
import styled from 'styled-components';

import brand_logo from '../static/images/logo.svg'
import quitIcon from '../static/images/cancel.svg'
import maximiseIcon from '../static/images/maximize.svg'
import minimiseIcon from '../static/images/minimize.svg'


const StyledNavbar = styled.nav`
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

const NavLink = styled.a`
&:hover, &:focus{
    text-decoration: none;
  border-bottom: 2px solid white;
  cursor: pointer;
}
border-bottom:2px solid;
border-color: ${props => props.active ? "white" : "transparent"};
-webkit-app-region: no-drag;
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

const currentUser = process.env.username;

export default function Navbar() {


  useEffect(() => {
    if (document) {
      document.getElementById('quitBtn').addEventListener("click", () => remote.getCurrentWindow().close())
      document.getElementById('minimizeBtn').addEventListener("click", () => remote.getCurrentWindow().minimize())
      document.getElementById('maximizeBtn').addEventListener("click", () => remote.getCurrentWindow().maximize())
    }
    return () => {
      document.getElementById('quitBtn').removeEventListener("click", () => remote.getCurrentWindow().close())
      document.getElementById('minimizeBtn').removeEventListener("click", () => remote.getCurrentWindow().minimize())
      document.getElementById('maximizeBtn').removeEventListener("click", () => remote.getCurrentWindow().maximize())
    }
  }, [])



  return (

    <StyledNavbar>
      <BrandLogo src={brand_logo}></BrandLogo>
      <BrandName>Predict</BrandName>

      <NavUsername>Hi, {currentUser}</NavUsername>

      <NavMenu>
        <NavItem>
          <NavLink active>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Forecasts</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Inventory</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Settings</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Help</NavLink>
        </NavItem>
        <AppActionsmenu>
          <MaximiseButton id="maximizeBtn" src={maximiseIcon}></MaximiseButton>
          <MinimiseButton id="minimizeBtn" src={minimiseIcon}></MinimiseButton>
          <QuitButton id="quitBtn" src={quitIcon}></QuitButton>
        </AppActionsmenu>
      </NavMenu>
    </StyledNavbar>
  )
}
