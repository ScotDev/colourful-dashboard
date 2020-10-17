import React from 'react';
import dayjs from 'dayjs'

import styled from 'styled-components';


const Card = styled.div`
    background: transparent;
    /* border:2px solid white; */
    padding: 0.6rem 3rem 1rem 2rem;
    min-height: 300px;
    min-width: 300px;
    overflow:hidden;
`

const CardContent = styled.div`
    /* display:grid;
    grid-template-columns: repeat(2, 50%); */
    display:flex;
    flex-direction:column;
    align-items:flex-start;
`

// const ColumnLeft = styled.div`
//     display:flex;
//     flex-direction:column;
//     align-items:flex-start;
// `
// const ColumnRight = styled.div`
//     display:flex;
//     flex-direction:column;
//     align-items:flex-start;
//     padding:4rem 0 0 2rem;
// `

const Greeting = styled.h4`
font-size:3rem;
font-weight:400;
width:100%;
margin-bottom:2rem;
`
const Time = styled.p`
font-size:2.5rem;
font-weight:400;
padding-top:2rem;
`

const Date = styled.p`
font-size:2.5rem;
font-weight:400;

`
const Month = styled.p`
font-size:1.25rem;
font-weight:400;
`
const DayOfWeek = styled.p`
font-size:2rem;
font-weight:400;
`

var now = dayjs()

let dayOfWeek = dayjs(now).format('dddd')
let date = dayjs(now).format('D')
let month = dayjs(now).format('MMMM')
let hours = dayjs(now).format('HH')
let minutes = dayjs(now).format('mm')

export default function DataCard() {

    return (
        <Card>
            <CardContent>
                {/* <ColumnLeft> */}
                <Greeting>Hi, {process.env.USERNAME}</Greeting>
                <Date>{date}</Date>
                <Month>{month}</Month>
                <DayOfWeek>{dayOfWeek}</DayOfWeek>
                <Time>{hours + ":" + minutes}</Time>

                {/* </ColumnLeft> */}
                {/* <ColumnRight>



                </ColumnRight> */}

            </CardContent>
        </Card>
    )
}
