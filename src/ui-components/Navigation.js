import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledNav = styled(motion.nav)`
  background-color: ${props => (props.dark ? "#171923" : "#c73664")};
  /* color:"#edfdfd"; */
  padding: 0.5rem 2rem;
  display: flex;
  background: transparent;
  align-items: center;
  /* font-family: 'Rubik', sans-serif; */
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

export { StyledNav, BrandLogo, BrandName, NavUsername, NavItem, NavMenu, NavStyledLink, AppActionsmenu, QuitButton, MaximiseButton, MinimiseButton };