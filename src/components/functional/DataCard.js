import React from 'react';

import styled from 'styled-components';

import Statistic from './miniComponents/Statistic';
import ChartLegend from './miniComponents/ChartLegend';

// import ChartExampleImg from '../../static/images/chart_example.svg'
import StatBreakdown from './miniComponents/StatBreakdown';

const Card = styled.div`
    background: rgba(196, 196, 196, 0.79);
    border-radius: 10px;
    padding: 0.6rem 3rem 1rem 3rem;
    min-height: 400px;
    min-width: 400px;
    overflow:hidden;
    box-shadow: 7px 6px 25px 4px rgba(26,26,26,0.51);
`
const CardTitle = styled.h3`
    font-size:1.4rem;
    font-weight:400;
    text-align: center;
    padding-bottom: 2rem;
`

const CardContent = styled.div`
    display:grid;
    grid-template-columns: repeat(2, 50%);
`

const ColumnLeft = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
const ColumnRight = styled.div`
    display:flex;
    flex-direction:column;
`

const Chart = styled.img`
    max-height:180px;
    max-width:180px;
    margin: 0 1rem 3rem 0;
`
const Breakdown = styled.div`
    display:flex;
    flex-direction:column;
`


export default function DataCard({ title, breakdownType, stats1, stats2 }) {
    return (
        <Card>
            <CardTitle>{title}</CardTitle>
            <CardContent>
                <ColumnLeft>

                    <Chart src={stats2.img}></Chart>


                </ColumnLeft>
                <ColumnRight>
                    <Breakdown>

                        {breakdownType === "legend" ? <ChartLegend></ChartLegend> : <StatBreakdown></StatBreakdown>}

                    </Breakdown>
                </ColumnRight>

                <Statistic stats1={stats1} stats2={stats2}></Statistic>
            </CardContent>
        </Card>
    )
}
