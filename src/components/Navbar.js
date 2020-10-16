import React from 'react';
import styled from 'styled-components';

import brand_logo from '../static/images/logo.svg'


const StyledNavbar = styled.nav`
  padding: 0.5rem 2rem;
  display: flex;
  background: transparent;
  color: #fff;
  align-items: center;
  font-family: 'Rubik', sans-serif;
`

const BrandLogo = styled.img`
  height: 50px;
  width: 50px;
`

const BrandName = styled.p`
  font-size: 1.5rem;
  padding-left: 0.75rem;
`

const NavUsername = styled.p`
  padding-left: 3rem;
  font-size: 1.25rem;
`
const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  margin: 0 1rem 0 auto;
  list-style-type: none;`

const NavItem = styled.li`
  padding: 0 0.75rem;
`

const NavLink = styled.a`
&:hover, &:focus{
    text-decoration: none;
  border-bottom: 2px solid white;
  cursor: pointer;
}

border-bottom:2px solid;
border-color: ${props => props.active ? "white" : "transparent"};
`



const currentUser = process.env.username;

export default function Navbar() {
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
            </NavMenu>
        </StyledNavbar>
    )
}
