import React, { useState } from 'react';

import styled from 'styled-components';

import DataCard from './DataCard';

import img1 from '../../static/images/chart_example.svg'
import img2 from '../../static/images/chart_example2.svg'


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
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 1rem
`


export default function Dashboard() {
    const [stats1, setStats1] = useState({ title: "Cases in DSV", img: img1, statValue: "310,210", changeValue: "72.78", changeLabel: "of total" })
    const [stats2, setStats2] = useState({ title: "Cases in Raben", img: img2, statValue: "116,000", changeValue: "27.22", changeLabel: "of total" })

    return (
        <Content>
            <DashboardGrid>
                <DataCard title="Total Inventory" breakdownType="legend" stats1={stats1} stats2={stats2} ></DataCard>
                <DataCard title="Popular Products" breakdownType="stats" stats1={stats1} stats2={stats2} ></DataCard>
                {/* <DataCard></DataCard>
                <DataCard></DataCard>
                <DataCard></DataCard>
                <DataCard></DataCard> */}
            </DashboardGrid>


        </Content>
    )
}
