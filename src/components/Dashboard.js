import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import { connect } from 'react-redux';

import AWS from 'aws-sdk';

import styled from 'styled-components';

import Welcome from './functional/DataCards/Welcome'
import Basic from './functional/DataCards/Basic'
import Detailed from './functional/DataCards/Detailed'
import LargeDataCard from './functional/DataCards/Large';

import img1 from '../static/images/chart_example.svg'
import img2 from '../static/images/chart_example2.svg'


const Content = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  padding: 1rem 1rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Rubik', sans-serif;
`
const DashboardGrid = styled.div`
    display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 1.5rem;
  padding: 1rem
`

const forecastqueryservice = new AWS.ForecastQueryService({
    region: "eu-west-1", accessKeyId: "", secretAccessKey: ""
});

// "22722"

function Dashboard(props) {

    const getForecast = (Arn, SKU) => {
        forecastqueryservice.queryForecast({ ForecastArn: Arn, Filters: { "item_id": SKU } }, function (err, data) {
            if (err) { console.log(err, err.stack) } // an error occurred
            else {
                console.log(data);
                props.updateAPIdata(data)
            };        // successful response
        });
    }




    return (
        <Content initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <DashboardGrid>
                <Welcome></Welcome>
                <LargeDataCard title="Inventory Value"></LargeDataCard>
                <Basic title="Total Inventory" chartImg={img1} ></Basic>
                <Detailed title="Popular Products" chartImg={img2}></Detailed>
                {/* <button onClick={() => { getForecast("", "22722") }}>Get forecast</button> */}

            </DashboardGrid>
        </Content>
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


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);