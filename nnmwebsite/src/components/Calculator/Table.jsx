import React from 'react'

const Table = ({values , heading}) => {
    let { turnover, brokerageRate, maxBrokerage, STTtotal, stampDuty, sebiFees,ipft,clgfees,transCharge,gst,totalCharges,calculateTable } = values
    return (
        
      <>
     
      
      <table id='equity-table1' class="table table-bordered table-dark">
            <thead>
                <tr>
                    <th colSpan="2"></th>
                    <th scope="col">Buy</th>
                    <th scope="col">Sell</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th colSpan="2">Turnover</th>
                    <td>{turnover}</td>
                    <td>{turnover}</td>
                </tr>
                <tr>
                    <th colSpan="2">Brokerage Rate</th>
                    <td>{brokerageRate}</td>
                    <td>{brokerageRate}</td>
                </tr>
                <tr>
                    <th colSpan="2">Brokerage</th>
                    <td>{maxBrokerage}</td>
                    <td>{maxBrokerage}</td>
                </tr>
                <tr>
                    <th colSpan="2">STT Total</th>
                    <td>{STTtotal   }</td>
                    <td>{STTtotal}</td>
                </tr>
                <tr>
                    <th colSpan="2">Stamp Duty</th>
                    <td>{stampDuty}</td>
                    <td>{stampDuty}</td>
                </tr>
                <tr>
                    <th colSpan="2">SEBI Turnover Fees</th>
                    <td>{sebiFees}</td>
                    <td>{sebiFees}</td>
                </tr>
                <tr>
                    <th colSpan="2">IPFT (Investor Protection Fund Turst)</th>
                    <td>{ipft}</td>
                    <td>{ipft}</td>
                </tr>
                <tr>
                    <th colSpan="2">CLG Fees </th>
                    <td>{clgfees}</td>
                    <td>{clgfees}</td>
                </tr>
                <tr>
                    <th colSpan="2">Exchange Trans. Charges</th>
                    <td>{transCharge}</td>
                    <td>{transCharge}</td>
                </tr>
                <tr>
                    <th colSpan="2">GST</th>
                    <td>{gst}</td>
                    <td>{gst}</td>
                </tr>
                <tr>
                    <th colSpan="2">Total Tax & Charges</th>
                    <td>{totalCharges}</td>
                    <td>{totalCharges}</td>
                </tr>

            </tbody>
        </table></>
    )
}

export default Table