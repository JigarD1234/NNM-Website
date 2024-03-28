import React, { useState } from 'react';
import './Calculator.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import EquityTable from './EquityTable';
import CurrencyTable from './CurrencyTable';
import CommodityTable from './CommodityTable';

const Calculator = () => {
  const [activeButton, setActiveButton] = useState("equity")


  const handleButtonClick = (headingName) => {
    setActiveButton(headingName)
  }

  
  return (
    <>
      <div className='calculator-tables '>
        <div className='container'>
          <div className='sec-headers sec-headers-dark'>   <h3 >Brokerage Calculator</h3><p>Calculate your brokerage fees with ease</p></div>
       
          <div className='row'>
            <div className='col-lg-4  calculator-headings'>
              <h3 className={activeButton === 'equity' ? 'heading-active' : ''} onClick={() => handleButtonClick("equity")}>Equity</h3>

            </div>
            <div className='col-lg-4  calculator-headings'>
              <h3 className={activeButton === 'currency' ? 'heading-active' : ''} onClick={() => handleButtonClick("currency")}>Currency</h3>

            </div>
            <div className='col-lg-4  calculator-headings'>
              <h3 className={activeButton === 'commodity' ? 'heading-active' : ''} onClick={() => handleButtonClick("commodity")}>Commodity</h3>

            </div>
          </div>

        </div>

        <div className='brokerage-tables container'>
          <div className={activeButton === 'equity' ? 'table-show' : 'table-hidden'}>
            <EquityTable />
          </div>
          <div className={activeButton === 'currency' ? 'table-show' : 'table-hidden'}>
            <CurrencyTable />
          </div>
          <div className={activeButton === 'commodity' ? 'table-show' : 'table-hidden'}>
            <CommodityTable />
          </div>
        </div>

      </div>


    </>
  );
}

export default Calculator;
