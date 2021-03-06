import React, { useLayoutEffect, useState } from 'react';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { StyledBtn } from '../../../ui-components/Btn';

import styled from 'styled-components';


const Card = styled.div`
    background: transparent;
    /* border:2px solid white; */
    padding: 0.6rem 3rem 1rem 2rem;
    min-height: 300px;
    min-width: 300px;
    overflow:hidden;
    border-radius:20px;

    /* box-shadow:  17px 17px 34px transparent, 
             -17px -17px 34px transparent; */


             /* background: linear-gradient(178.72deg, #D15438 1.08%, #C73664 98.91%); */

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
margin-bottom:1rem;
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

export default function DataCard() {
    const [dayOfWeek, setdayOfWeek] = useState("0")
    const [date, setDate] = useState("0")
    const [month, setMonth] = useState("0")
    const [hours, setHours] = useState("00")
    const [minutes, setMinutes] = useState("00")

    const updateDateTime = () => {
        let now = dayjs()
        setdayOfWeek(dayjs(now).format('dddd'))
        setDate(dayjs(now).format('D'))
        setMonth(dayjs(now).format('MMMM'))
        setHours(dayjs(now).format('HH'))
        setMinutes(dayjs(now).format('mm'))
    }

    setInterval(updateDateTime, 1000);

    // Fixes flash of initial state
    useLayoutEffect(() => {
        updateDateTime()
        // return () => {
        //     cleanup
        // };
    }, [])

    return (
        <Card>
            <CardContent>
                {/* <ColumnLeft> */}
                <Greeting>Hi, {process.env.USERNAME}</Greeting>
                <Date>{date}</Date>
                <Month>{month}</Month>
                <DayOfWeek>{dayOfWeek}</DayOfWeek>
                <Time>{hours + ":" + minutes}</Time>

                <StyledBtn secondary>Inventory</StyledBtn>

                {/* </ColumnLeft> */}
                {/* <ColumnRight>



                </ColumnRight> */}

            </CardContent>
        </Card>
    )
}
