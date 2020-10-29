import React from 'react';
import { motion } from 'framer-motion';


import styled from 'styled-components';

import Statistic from '../miniComponents/Statistic';
import ChartLegend from '../miniComponents/ChartLegend';

// import ChartExampleImg from '../../static/images/chart_example.svg'
import StatBreakdown from '../miniComponents/StatBreakdown';

const Card = styled(motion.div)`
    background: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    padding: 0.6rem 3rem 1rem 3rem;
    height: 400px;
    width: 375px;
    overflow:hidden;
    box-shadow: 7px 6px 25px 4px rgba(26,26,26,0.4);
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
        <Card whileHover={{ scale: 1.02, origin: 0, boxShadow: "10px 12px 35px 6px rgba(26,26,26,0.4)" }} transition={{ type: "spring", stiffness: 300 }}>
            <CardTitle>{title}</CardTitle>
            <CardContent>
                <ColumnLeft>

                    <Chart src={chartImg}></Chart>


                </ColumnLeft>
                <ColumnRight>
                    <Breakdown>

                        <ChartLegend></ChartLegend>

                    </Breakdown>
                </ColumnRight>

                <Statistic></Statistic>
            </CardContent>
        </Card>
    )
}
