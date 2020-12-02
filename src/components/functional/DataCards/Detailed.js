import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../../ui-components/Card';

import styled from 'styled-components';

import Statistic from '../miniComponents/Statistic';
import StatBreakdown from '../miniComponents/StatBreakdown';

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
