import React from 'react';


// import GlobalFonts from './static/fonts/fonts.js';

import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';




export default function App({ currentUser }) {
    return (<>
        {/* <GlobalFonts /> */}
        <Navbar currentUser={currentUser}></Navbar>


        <Dashboard></Dashboard>


    </>)
}
