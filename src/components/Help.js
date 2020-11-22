import React from 'react';
import { motion } from 'framer-motion';
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

const StyledLink = styled.a`
font-size:1.25rem;
border-bottom:2px solid;
border-color: ${props => props.active ? "white" : "transparent"};
-webkit-app-region: no-drag;
text-decoration: none;
cursor: pointer;

&:hover, &:focus{
  border-bottom: 2px solid white;
}
`

export default function Help() {
    return (
        <Content initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <PageTitle>Help</PageTitle>
            <Divider></Divider>
            <SectionTitle>Something wrong?</SectionTitle>
            <SectionText>Email <StyledLink href="mailto:support@example.com">support@example.com</StyledLink> for assistance</SectionText>
            <Divider></Divider>
            <SectionTitle>About</SectionTitle>
            <SectionText>Node version: {process.versions.node}</SectionText>
            <SectionText>Chrome version: {process.versions.chrome}</SectionText>
            <SectionText>Electron version: {process.versions.electron}</SectionText>
            <SectionText>Predict version: Something from Redux</SectionText>
        </Content>
    )
}
