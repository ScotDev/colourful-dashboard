import React from 'react';

import styled from 'styled-components';

import increase_icon from '../../../static/images/increase_icon.svg';
import decrease_icon from '../../../static/images/descrease_icon.svg';

const StatisticBlock = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
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
padding-top:0.1rem;
`

const ChangeIcon = styled.img`
height:1rem;
width: 1rem;
padding-right:0.25rem;
`

export default function Statistic() {

    // This is fucked - need redux or context
    // Should also be mapped out

    return (<>
        <StatisticBlock>
            <StatTitle>Title</StatTitle>
            <StatNumber>300,000</StatNumber>
            <StatChange>
                <ChangeIcon src={increase_icon}></ChangeIcon>
                14.50% increase
            </StatChange>
        </StatisticBlock>
        <StatisticBlock>
            <StatTitle>Title 2</StatTitle>
            <StatNumber>450,000</StatNumber>
            <StatChange>
                <ChangeIcon src={decrease_icon}></ChangeIcon>
                20.25% decrease
            </StatChange>

        </StatisticBlock>
    </>)
}
