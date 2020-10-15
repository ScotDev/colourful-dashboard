import React from 'react';

import increase_icon from '../../../static/images/increase_icon.svg';
import descrease_icon from '../../../static/images/descrease_icon.svg';

export default function Statistic() {
    return (
        <div className="statistic">
            <p>Cases in DSV</p>
            <p>310,210</p>
            <img src={increase_icon}></img>
            <p>4.27% increase</p>

        </div>
    )
}
