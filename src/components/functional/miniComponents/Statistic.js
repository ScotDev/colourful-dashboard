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

export default function Statistic({ stats1, stats2 }) {

    // This is fucked - need redux or context
    // Should also be mapped out

    return (<>
        <StatisticBlock>
            <StatTitle>{stats1.title}</StatTitle>
            <StatNumber>{stats1.statValue}</StatNumber>
            <StatChange>
                <ChangeIcon src={increase_icon}></ChangeIcon>
                {stats1.changeValue}% {stats1.changeLabel}
            </StatChange>
        </StatisticBlock>
        <StatisticBlock>
            <StatTitle>{stats2.title}</StatTitle>
            <StatNumber>{stats2.statValue}</StatNumber>
            <StatChange>
                <ChangeIcon src={decrease_icon}></ChangeIcon>
                {stats2.changeValue}% {stats2.changeLabel}
            </StatChange>

        </StatisticBlock>
    </>)
}
