import React from 'react';

import Navbar from './components/Navbar';
import Dashboard from './components/functional/Dashboard';
import Footer from './components/Footer';

export default function App() {
    return (<>
        <Navbar></Navbar>
        <div className="content">
            {/* <h2>Hello</h2> */}
            {/* <div className="grid"> */}


            {/* </div> */}
            <Dashboard></Dashboard>

        </div>
        <Footer></Footer>
    </>)
}
