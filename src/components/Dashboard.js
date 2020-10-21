import React from 'react';
import { motion } from 'framer-motion';

import styled from 'styled-components';

import Welcome from './functional/DataCards/Welcome'
import Basic from './functional/DataCards/Basic'
import Detailed from './functional/DataCards/Detailed'
import Large from './functional/DataCards/Large'

import img1 from '../static/images/chart_example.svg'
import img2 from '../static/images/chart_example2.svg'


const Content = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  padding: 1rem 1rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Rubik', sans-serif;
`
const DashboardGrid = styled.div`
    display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 1.5rem;
  padding: 1rem
`


export default function Dashboard() {



    return (
        <Content initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <DashboardGrid>
                <Welcome></Welcome>
                <Large title="Inventory Value"></Large>
                <Basic title="Total Inventory" chartImg={img1} ></Basic>
                <Detailed title="Popular Products" chartImg={img2}></Detailed>

            </DashboardGrid>
        </Content>
    )
}
