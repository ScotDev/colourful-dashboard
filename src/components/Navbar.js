import React from 'react';

import brand_logo from '../static/images/logo.svg'

const current_user = "Callum Giles"

export default function Navbar() {
    return (
        <div className="navbar">
            <img className="brand-logo" src={brand_logo}></img>
            <p className="brand-name">Predict</p>

            <p className="nav-user">Hi, {current_user}</p>

            <ul className="nav-menu">
                <li className="nav-item">
                    <a className="nav-link active-link">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Forecasts</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Inventory</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Settings</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Help</a>
                </li>
            </ul>
        </div>
    )
}
