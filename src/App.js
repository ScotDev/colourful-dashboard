import React, { useEffect, useState } from 'react';

import { ToastProvider } from 'react-toast-notifications';
// import { Snack } from '../snackbar';

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
        }, 2000)

        console.log(isLoading)
    }, [])

    if (isLoading) {
        return <LoadingScreen></LoadingScreen>
    } else {
        return (<>
            <ToastProvider autoDismiss
                autoDismissTimeout={4000}
                placement="bottom-right">

                <Navbar></Navbar>

                <Dashboard></Dashboard>

            </ToastProvider>
        </>)
    }


}
