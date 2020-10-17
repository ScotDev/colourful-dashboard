import React, { useState } from 'react';

import styled from 'styled-components';

import Welcome from './functional/DataCards/Welcome'
import Basic from './functional/DataCards/Basic'
import Detailed from './functional/DataCards/Detailed'
import Large from './functional/DataCards/Large'

import img1 from '../static/images/chart_example.svg'
import img2 from '../static/images/chart_example2.svg'


const Content = styled.div`
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
    // const [stats1, setStats1] = useState({ title: "Cases in DSV", img: img1, statValue: "310,210", changeValue: "72.78", changeLabel: "of total" })
    // const [stats2, setStats2] = useState({ title: "Cases in Raben", img: img2, statValue: "116,000", changeValue: "27.22", changeLabel: "of total" })

    return (
        <Content>
            <DashboardGrid>
                <Welcome></Welcome>
                <Basic title="Total Inventory" chartImg={img1} ></Basic>
                <Detailed title="Popular Products" chartImg={img2}></Detailed>
                <Large title="Inventory Value"></Large>
                {/* <DataCard></DataCard>
                <DataCard></DataCard>
                <DataCard></DataCard>
                <DataCard></DataCard> */}
            </DashboardGrid>


        </Content>
    )
}
