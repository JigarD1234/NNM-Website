import React, { useState } from 'react'

import CommonEquityTable from './CommonEquityTable'
import MarketNavigation from '../MarketNavigation/MarketNavigation'

const OutUnder = () => {
    const [activeUnder, setActiveUnder] = useState("Out")
    return (
        <div style={{ paddingTop: "10%" }}>
            <MarketNavigation/>
            
            <div style={{minHeight:"100vh"}} className='out-under-section'>
                <div className='container'>
                    <CommonEquityTable mainHeading="Out & Under" toggleButton1="Out" toggleButton2="Under" activeToggle={activeUnder} setActiveToggle={setActiveUnder} />
                    <OutUnderFullTable/>


                </div>
            </div>
        </div>
    )
}

export default OutUnder

const OutUnderFullTable = () => {
    return (

        <>
            <table class="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">Company Name</th>
                        <th scope="col">Last Price</th>
                        <th scope="col">Prev Price</th>
                        <th scope="col">Change(%)</th>
                        <th scope="col">Change(Rs)</th>
                        <th scope="col">Volume</th>
                    </tr>
                </thead>
                {/* <tbody>
                    {data.map(company => (
                        <tr key={company.id}>
                            <td>{company.companyName}</td>
                            <td>{company.lastPrice}</td>
                            <td>{company.prevPrice}</td>
                            <td>{company.changePercent}</td>
                            <td>{company.changeRs}</td>
                            <td>{company.volume}</td>
                        </tr>
                    ))}

                </tbody> */}
            </table>




        </>
    )

}