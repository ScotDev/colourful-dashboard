import React from 'react';

import styled from 'styled-components';

import increase_icon from '../../../static/images/increase_icon.svg';
import decrease_icon from '../../../static/images/descrease_icon.svg';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const StatisticBlock = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
padding-bottom:0.5rem;
`

const StatTitle = styled.p`
font-size:1rem;
text-align:left;
padding-bottom:0.25rem;
`
const StatNumber = styled.p`
font-size:1.25rem;
text-align:left;
padding-bottom:0.25rem;
`

const StatChange = styled.p`
font-size:0.9rem;
display:flex;
align-items:center;
padding-top:0.1rem;
`

const ChangeIcon = styled.img`
height:1rem;
width: 1rem;
padding-right:0.25rem;
`

const Pill = styled.div`
height:0.6rem;
border-radius:50px;
/* margin-top:0.3rem; */
width:3rem;
margin-left:0.6rem;
background-color: ${props => props.bgcolor || "white"};;
`

export default function StatBreakdown() {
    return (
        <>
            <Container>
                <StatisticBlock>
                    <StatTitle>29.5% of total</StatTitle>
                    <StatNumber>B002</StatNumber>
                    <StatChange>
                        <ChangeIcon src={decrease_icon}></ChangeIcon>
                        4.62%
                        <Pill bgcolor={"#C73664"} ></Pill>
                    </StatChange>
                </StatisticBlock>
                <StatisticBlock>
                    <StatTitle>14.2% of total</StatTitle>
                    <StatNumber>VDW-12</StatNumber>
                    <StatChange>
                        <ChangeIcon src={decrease_icon}></ChangeIcon>
                        2.11%
                        <Pill bgcolor={"#7EBCD0"}></Pill>
                    </StatChange>

                </StatisticBlock>

            </Container>

        </>
    )
}
