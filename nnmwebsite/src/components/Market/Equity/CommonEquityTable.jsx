import React, { useEffect, useState } from 'react'
const CommonEquityTable = ({toggleButton1 , toggleButton2 , mainHeading , activeToggle , setActiveToggle}) => {

    const [curerntDate, setCurrentDate] = useState('')

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const options = {
                year: 'numeric',
                month: 'short',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
                timeZone: 'Asia/Kolkata'
            };
            const formattedDateTime = now.toLocaleString('en-IN', options);
            setCurrentDate(formattedDateTime);
        }, 1000)
        return () => clearInterval(interval)

    }, [])

    const handleActiveToggle =(buttonName)=>{

        setActiveToggle(buttonName)

    }



    return (
        <>

            <div className='gainer-loser-heading sec-headers sec-headers-dark'>
                <h3>{mainHeading}</h3>
            </div>

            <div className='gainer-loser-input'>
                <div className='row'>
                    <div className='col-lg-4 gainer-loser-button'>

                        <button className={activeToggle === toggleButton1 ? 'gainer-loser-active':''} onClick={()=>handleActiveToggle(toggleButton1)}>{toggleButton1}</button>
                        <button className={activeToggle ===  toggleButton2?'gainer-loser-active':''} onClick={()=>handleActiveToggle(toggleButton2)}>{toggleButton2}</button>

                        <span>{curerntDate} IST</span>

                    </div>
                    <div className='col-lg-8 gainer-loser-select'>

                        <div className='select-exchange'>
                            <select>
                                <option value="NSE">NSE</option>
                                <option value="BSE">BSE</option>
                            </select>
                        </div>
                        <div className='select-exchange'>
                            <select>
                                <option value="daily">Daily</option>
                                <option value="weekly">Weekly</option>
                                <option value="monthly">Monthly</option>
                            </select>
                        </div>
                        <div className='select-exchange'>
                            <select>
                                <option value="NSE">NSE</option>
                                <option value="BSE">BSE</option>
                            </select>
                        </div>
                        <div className='select-button'>
                            <button>Search</button>
                        </div>


                    </div>
                </div>
            </div>
            <hr></hr>


        </>
    )
}

export default CommonEquityTable