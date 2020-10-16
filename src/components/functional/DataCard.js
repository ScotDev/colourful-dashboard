import React from 'react';

import styled from 'styled-components';

import Statistic from './miniComponents/Statistic';

import ChartExampleImg from '../../static/images/Chart.jpg'

const Card = styled.div`
  background: rgba(255, 255, 255, 0.4);
  border-radius: 7px;
  -webkit-border-radius: 7px;
  -moz-border-radius: 7px;
  -ms-border-radius: 7px;
  -o-border-radius: 7px;
  padding: 1rem;
  min-height: 400px;
  min-width: 450px;
  overflow:hidden;

`
const CardTitle = styled.h3`
font-size:1.4rem;
font-weight:600;
text-align: center;
padding-bottom: 1rem;
`

const CardContent = styled.div`
display:grid;
${'' /* grid-template-areas:

"chart chart legend"
"chart chart legend"
"stat stat"
; */}
gap:1rem;
grid-template: 60% / 50% 50%;
`

const StatArea = styled.div`
${'' /* grid-area: stat; */}
`
const Chart = styled.img`
max-height:133px;
max-width:200px;
`

export default function DataCard({ title, stat_1 }) {
    return (
        <Card>
            <CardTitle>{title}</CardTitle>
            <CardContent>
                <Chart src={ChartExampleImg}></Chart>
                <StatArea><Statistic stat_1={stat_1}></Statistic></StatArea>
                <StatArea><Statistic stat_1={stat_1}></Statistic></StatArea>
                <StatArea><Statistic stat_1={stat_1}></Statistic></StatArea>
                <StatArea><Statistic stat_1={stat_1}></Statistic></StatArea>
                <StatArea><Statistic stat_1={stat_1}></Statistic></StatArea>

            </CardContent>
        </Card>
    )
}
