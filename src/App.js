import React from 'react';


import GlobalFonts from './static/fonts/fonts';

import Navbar from './components/Navbar';
import Dashboard from './components/functional/Dashboard';




export default function App({ currentUser }) {
    return (<>
        <GlobalFonts />
        <Navbar currentUser={currentUser}></Navbar>


        <Dashboard></Dashboard>


    </>)
}
