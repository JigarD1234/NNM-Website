import React, { useEffect, useState } from 'react'
import CommonEquityTable from './CommonEquityTable';
import { NavLink } from 'react-router-dom';
import MarketNavigation from '../MarketNavigation/MarketNavigation';

const GainersLosers = () => {

  const gainers = [
    {
      id: 1,
      companyName: "ABC Inc.",
      lastPrice: 100,
      prevPrice: 90,
      changeRs: 10,
      changePercent: 11.11,
      volume: 1000000
    },
    {
      id: 2,
      companyName: "XYZ Corp.",
      lastPrice: 150,
      prevPrice: 140,
      changeRs: 10,
      changePercent: 7.14,
      volume: 800000
    },
    {
      id: 3,
      companyName: "DEF Ltd.",
      lastPrice: 120,
      prevPrice: 110,
      changeRs: 10,
      changePercent: 9.09,
      volume: 1200000
    },
    {
      id: 4,
      companyName: "GHI Group",
      lastPrice: 200,
      prevPrice: 190,
      changeRs: 10,
      changePercent: 5.26,
      volume: 1500000
    },
    {
      id: 5,
      companyName: "JKL Enterprises",
      lastPrice: 80,
      prevPrice: 70,
      changeRs: 10,
      changePercent: 14.29,
      volume: 900000
    },
    {
      id: 6,
      companyName: "MNO Corporation",
      lastPrice: 95,
      prevPrice: 85,
      changeRs: 10,
      changePercent: 11.76,
      volume: 700000
    },
    {
      id: 7,
      companyName: "PQR Industries",
      lastPrice: 180,
      prevPrice: 170,
      changeRs: 10,
      changePercent: 5.88,
      volume: 1100000
    },
    {
      id: 8,
      companyName: "STU Limited",
      lastPrice: 220,
      prevPrice: 210,
      changeRs: 10,
      changePercent: 4.76,
      volume: 1300000
    },
    {
      id: 9,
      companyName: "VWX Corporation",
      lastPrice: 130,
      prevPrice: 120,
      changeRs: 10,
      changePercent: 8.33,
      volume: 1000000
    },
    {
      id: 10,
      companyName: "YZA Inc.",
      lastPrice: 175,
      prevPrice: 165,
      changeRs: 10,
      changePercent: 6.06,
      volume: 1400000
    }
  ];

  const losers = [
    {
      id: 11,
      companyName: "EFG Ltd.",
      lastPrice: 80,
      prevPrice: 90,
      changeRs: -10,
      changePercent: -11.11,
      volume: 1200000
    },
    {

      id: 12,
      companyName: "PQR Co.",
      lastPrice: 70,
      prevPrice: 80,
      changeRs: -10,
      changePercent: -12.5,
      volume: 500000
    },
    {
      id: 13,

      companyName: "LMN Enterprises",
      lastPrice: 110,
      prevPrice: 120,
      changeRs: -10,
      changePercent: -8.33,
      volume: 800000
    },
    {
      id: 14,

      companyName: "XYZ Ltd.",
      lastPrice: 95,
      prevPrice: 105,
      changeRs: -10,
      changePercent: -9.52,
      volume: 600000
    },
    {
      id: 15,

      companyName: "RST Group",
      lastPrice: 50,
      prevPrice: 60,
      changeRs: -10,
      changePercent: -16.67,
      volume: 700000
    },
    {
      id: 16,

      companyName: "ABC Corporation",
      lastPrice: 65,
      prevPrice: 75,
      changeRs: -10,
      changePercent: -13.33,
      volume: 400000
    },
    {
      id: 17,
      companyName: "PQS Industries",
      lastPrice: 40,
      prevPrice: 50,
      changeRs: -10,
      changePercent: -20,
      volume: 300000
    },
    {
      id: 18,
      companyName: "EFG Limited",
      lastPrice: 55,
      prevPrice: 65,
      changeRs: -10,
      changePercent: -15.38,
      volume: 200000
    },
    {
      id: 19,
      companyName: "TUV Ltd.",
      lastPrice: 85,
      prevPrice: 95,
      changeRs: -10,
      changePercent: -10.53,
      volume: 900000
    },
    {
      id: 20,
      companyName: "MNO Inc.",
      lastPrice: 45,
      prevPrice: 55,
      changeRs: -10,
      changePercent: -18.18,
      volume: 100000
    },
    {
      id: 21,
      companyName: "PQR Ltd.",
      lastPrice: 120,
      prevPrice: 130,
      changeRs: -10,
      changePercent: -7.69,
      volume: 800000
    },
    {
      id: 22,
      companyName: "RST Inc.",
      lastPrice: 85,
      prevPrice: 95,
      changeRs: -10,
      changePercent: -10.53,
      volume: 600000
    },
    {
      id: 23,
      companyName: "UVW Corporation",
      lastPrice: 160,
      prevPrice: 150,
      changeRs: 10,
      changePercent: 6.67,
      volume: 900000
    },
    {
      id: 24,
      companyName: "XYZ Industries",
      lastPrice: 75,
      prevPrice: 65,
      changeRs: 10,
      changePercent: 15.38,
      volume: 700000
    },
    {
      id: 25,
      companyName: "MNO Enterprises",
      lastPrice: 110,
      prevPrice: 120,
      changeRs: -10,
      changePercent: -8.33,
      volume: 800000
    }
  ];



  const [activeGainer, setActiveGainer] = useState('Gainer')
  const itemsPerPage = 5;
  const [currentpage , setCurrentPage] = useState(1)

  const handleNextPage = ()=>{
    setCurrentPage(prevPage=>prevPage+1)
  }

  const handlePrevPage=()=>{
    setCurrentPage(prevPage=>prevPage-1 )
  }


  return (
    <>
      <div style={{ paddingTop: '10%' }} className='top-gainers-losers'>
        <MarketNavigation/>
        <div className='table-gainer-losers'>
          <div className='container'>
            <CommonEquityTable mainHeading="Gainer & Losers" toggleButton1="Gainer" toggleButton2="Loser" activeToggle={activeGainer} setActiveToggle={setActiveGainer} />

            {activeGainer === "Gainer" ? (

              <GainerLoserFullTable data={gainers} currentpage= {currentpage} itemsPerPage = {itemsPerPage} />
            ) : <GainerLoserFullTable data={losers} currentpage= {currentpage} itemsPerPage = {itemsPerPage} />
            }

            <div className='gainer-loser-pagination'>
              <button onClick={handlePrevPage} disabled={currentpage===1}>Previous</button>
              <button onClick={handleNextPage} disabled={currentpage*itemsPerPage>=gainers.length && currentpage*itemsPerPage>=losers.length}>Next</button>
            </div>



          </div>
        </div>
      </div>
    </>
  )
}

export default GainersLosers

const GainerLoserFullTable = ({ data , currentpage , itemsPerPage }) => {
  const indexOfLastItem = currentpage*itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = data.slice(indexOfFirstItem , indexOfLastItem)
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
        <tbody>
          {currentItems.map(company => (
            <tr key={company.id}>
              <td>


                <NavLink to={{
                  pathname: `company-profile/${company.companyName}`,
                
                }} >{company.companyName}</NavLink>


              </td>
              <td>{company.lastPrice}</td>
              <td>{company.prevPrice}</td>
              <td>{company.changePercent}</td>
              <td>{company.changeRs}</td>
              <td>{company.volume}</td>
            </tr>
          ))}

        </tbody>
      </table>




    </>
  )

}