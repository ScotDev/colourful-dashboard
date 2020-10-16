import React from 'react';

import styled from 'styled-components';

import increase_icon from '../../../static/images/increase_icon.svg';
import decrease_icon from '../../../static/images/descrease_icon.svg';

const UOM = "£"
const upOrDown = "increase"

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
`

const ChangeIcon = styled.img`
height:1rem;
width: 1rem;
padding-right:0.25rem;
`

export default function Statistic({ stat_1 }) {
    // This is fucked - need redux or context
    const { title, statValue, changeValue, changeType } = stat_1;
    // console.log(props.props)

    return (
        <StatisticBlock>
            <StatTitle>{title}</StatTitle>
            <StatNumber>{UOM}{statValue}</StatNumber>
            <StatChange>
                <ChangeIcon src={increase_icon}></ChangeIcon>
                {changeValue}% {changeType}
            </StatChange>

        </StatisticBlock>
    )
}
