import React from 'react';

import styled from 'styled-components';

const Item = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding:0.5rem 1.25rem;
width: 80%;
`

const TagText = styled.p`
font-size:0.9rem;
`

const Pill = styled.div`
height:0.6rem;
border-radius:50px;
width:3rem;
margin-left:0.6rem;
background-color: ${props => props.bgcolor || "white"};;
`
// Mapping out passed down props required here

export default function ChartLegend() {
    return (<>
        <Item>
            <TagText>DSV</TagText>
            <Pill bgcolor={"#C73664"}></Pill>
        </Item>
        <Item>
            <TagText>Raben</TagText>
            <Pill bgcolor={"#7EBCD0"}></Pill>
        </Item>
    </>)
}
