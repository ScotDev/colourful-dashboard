import React, { useEffect } from 'react';
// import { dialog, remote } from 'electron';
const remote = require('electron').remote
import styled from 'styled-components';

import brand_logo from '../static/images/logo.svg'
import quitIcon from '../static/images/cancel.svg'


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

const QuitButton = styled.img`
padding: 0 0 0 3rem;
margin-top:0.25rem;
height:1.5rem;
/* border: 2px solid white; */
background-color:transparent;
-webkit-app-region: no-drag;
`

const currentUser = process.env.username;

export default function Navbar() {


  useEffect(() => {
    if (document) {
      document.getElementById('quitBtn').addEventListener("click", () => remote.getCurrentWindow().close())
    }
    return () => {
      document.getElementById('quitBtn').removeEventListener("click", () => remote.getCurrentWindow().close())
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
        <NavItem>
          <QuitButton id="quitBtn" src={quitIcon}></QuitButton>
        </NavItem>
      </NavMenu>
    </StyledNavbar>
  )
}
