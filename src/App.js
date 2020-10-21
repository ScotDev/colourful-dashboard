import React, { useEffect, useState } from 'react';

// import GlobalFonts from './static/fonts/fonts.js';

import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import LoadingScreen from './components/LoadingScreen';



export default function App() {
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {

        console.log(isLoading)

        // This delay will be replaced by data fetching in future
        setTimeout(() => {
            setLoading(!isLoading)
        }, 2500)

        console.log(isLoading)
    }, [])

    if (isLoading) {
        return <LoadingScreen></LoadingScreen>
    } else {
        return (<>

            <Navbar></Navbar>

            <Dashboard></Dashboard>
        </>)
    }


}
