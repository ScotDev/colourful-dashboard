import React from 'react';

import DataCard from './DataCard';

export default function Dashboard() {
    return (
        <div className="content">
            <div className="grid">
                <DataCard></DataCard>
                <DataCard></DataCard>
                <DataCard></DataCard>
                <DataCard></DataCard>
                <DataCard></DataCard>
                <DataCard></DataCard>
            </div>


        </div>
    )
}
