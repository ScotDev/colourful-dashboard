import React from 'react';

import styled from 'styled-components';

import DataCard from './DataCard';


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
`


export default function Dashboard() {
    return (
        <Content>
            <DashboardGrid>
                <DataCard title="Inventory" stat_1={{ title: "Total inventory value", statValue: "6,000,000", changeValue: "4.27", changeType: "increase" }}></DataCard>
                {/* <DataCard></DataCard>
                <DataCard></DataCard>
                <DataCard></DataCard>
                <DataCard></DataCard>
                <DataCard></DataCard> */}
            </DashboardGrid>


        </Content>
    )
}
