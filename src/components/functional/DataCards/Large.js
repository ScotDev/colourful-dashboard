import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';

import { Card } from '../../../ui-components/Card';

import styled from 'styled-components';

import Statistic from '../miniComponents/Statistic';
import ChartLegend from '../miniComponents/ChartLegend';

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

const Breakdown = styled.div`
    display:flex;
    flex-direction:column;
`





function LargeDataCard(props) {
    const [chartData, setchartData] = useState(false)
    const [chartLabels, setchartLabels] = useState(['January', 'February', 'March', 'April', 'May', 'June', 'July'])
    const [chartDataPoints, setchartDataPoints] = useState([65, 59, 80, 81, 56, 55, 40])


    // const processRawAPIData = (props.API_data, dummydata) => {


    // }

    const dummyData = {
        labels: chartLabels,
        datasets: [
            {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.2,
                // backgroundColor: 'rgba(62, 67, 89, 1)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'round',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: chartDataPoints
            }
        ]
    };


    // if (props.API_data.length <= 1) {
    //     console.log("No API data")
    // } else {
    //     console.log("Predictions", props.API_data.Forecast.Predictions.p90)
    //     const labels = props.API_data.Forecast.Predictions.p90.map((item) => {
    //         return item.Timestamp
    //     });
    //     setchartLabels(labels)
    //     console.log("Labels: ", labels)
    //     console.log("chartLabels: ", chartLabels)
    // }



    useEffect(() => {
        console.log("props changed")
        console.log(props)
        if (props.API_data.length <= 1) {
            console.log("No API data")
        } else {
            console.log("Predictions", props.API_data.Forecast.Predictions.p90)
            const labels = props.API_data.Forecast.Predictions.p90.map((item) => {
                return item.Timestamp
            });
            const dataPoints = props.API_data.Forecast.Predictions.p90.map((item) => {
                return item.Value.toFixed(1)
            });
            setchartLabels(labels)
            setchartDataPoints(dataPoints)
            console.log("Labels: ", labels)
            console.log("chartLabels: ", chartLabels)
            console.log("Datapoints: ", dataPoints)
            console.log("Chart datapoints: ", chartDataPoints)
        }
    }, [props])


    // Need to map timestamps to labels and datapoints to datasets > data array
    // https://codesandbox.io/s/zwxo5l6jvl?file=/src/LineDemo.js

    // console.log(props)

    const options = {
        scales: {
            xAxes: [{
                gridLines: {
                    zeroLineColor: "rgba(255, 255, 255, 1)",
                    display: false,
                    offsetGridLines: true
                }
            }],
            yAxes: [{
                gridLines: {
                    zeroLineColor: "rgba(255, 255, 255, 1)",
                    display: false,
                    offsetGridLines: true
                }
            }]

        },
        legend: {
            labels: {
                fontColor: "#fff"
            }
        }
    }


    return (
        <Card large>
            <CardTitle>{props.title}</CardTitle>
            <CardContent>




                <Line data={!chartData ? dummyData : chartData} width={100} height={50} options={options}></Line>

                {/* <ColumnLeft> */}
                {/* <Chart src={stats2.img}></Chart> */}
                {/* </ColumnLeft> */}
                {/* <ColumnRight> */}
                {/* <Breakdown> */}
                {/* {breakdownType === "legend" ? <ChartLegend></ChartLegend> : <StatBreakdown></StatBreakdown>} */}
                {/* </Breakdown> */}
                {/* </ColumnRight> */}
            </CardContent>
        </Card>
    )
}


const mapStateToProps = state => {
    return {
        API_data: state.API_data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateAPIdata: (data) => { dispatch({ type: "UPDATE_API_DATA", payload: data }) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LargeDataCard);

