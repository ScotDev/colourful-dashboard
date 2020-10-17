import React from 'react';

import styled from 'styled-components';

import Statistic from '../miniComponents/Statistic';
import StatBreakdown from '../miniComponents/StatBreakdown';

const Card = styled.div`
    background: rgba(196, 196, 196, 0.79);
    border-radius: 10px;
    padding: 0.6rem 3rem 1rem 3rem;
    height: 400px;
    width: 375px;
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


export default function DataCard({ title, chartImg }) {
    return (
        <Card>
            <CardTitle>{title}</CardTitle>
            <CardContent>
                <ColumnLeft>

                    <Chart src={chartImg}></Chart>


                </ColumnLeft>
                <ColumnRight>
                    <Breakdown>

                        <StatBreakdown></StatBreakdown>

                    </Breakdown>
                </ColumnRight>

                <Statistic></Statistic>
            </CardContent>
        </Card>
    )
}
