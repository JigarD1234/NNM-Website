import React, { useState } from 'react'

const GainerShortTable = ({ button1, button2, headingGainer, headingLoser, headingVolume, headingValue }) => {

  const [activeShort, setActiveShort] = useState(button1)

  function handleActiveShort(buttonName) {
    setActiveShort(buttonName)
  }
  const gainLose = activeShort === button1 ? headingGainer : headingLoser
  const volumeValue = activeShort === button1 ? headingVolume : headingValue

  return (
    <>
      <div className='gainer-col'>
        <div className='gainer-button'>
          <button className={activeShort === button1 ? 'gainer-active' : ''} onClick={() => handleActiveShort(button1)}>{button1}</button>
          <span>|</span>
          <button className={activeShort === button2 ? 'gainer-active' : ''} onClick={() => handleActiveShort(button2)}>{button2}</button>

        </div>
        <div className='gainer-exchange'>
          <select>
            <option value='NSE'>NSE</option>
            <option value='BSE'>BSE</option>
          </select>
        </div>
      </div>
      <table class="table table-striped ">
        <thead>
          <tr>
            <th scope="col">Company Name</th>
            <th scope="col">LTP(Rs)</th>
            <th scope="col">Last(%)</th>
            <th scope="col">Handle(Rs)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{gainLose || volumeValue}</th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default GainerShortTable