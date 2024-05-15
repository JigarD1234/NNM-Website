import React from 'react'
import { NavLink } from 'react-router-dom'

const FinanceHeader = ({quote , person , img}) => {
    return (
        <>

            <div className='personal-finance'>
                <div className='container'>
                    <div className='row personal-finance-row'>
                        <div className='col-lg-6 personal-finance-row'>
                            <h1>{quote}<br /><span>– {person}</span></h1>
                        </div>
                        <div className='col-lg-6 personal-finance-img'>
                            <img src={img} />
                        </div>

                    </div>

                </div>
            </div>
            <div className='insurance-navigation'>
                <ul>
                    <li><NavLink to='/wealth/personal-finance'>Personal Finance</NavLink></li>
                    <li><NavLink to='/wealth/wealth-management'>Wealth Management</NavLink></li>
                    <li><NavLink to='/wealth/protection'>Protection</NavLink></li>
                </ul>
            </div>


        </>
    )
}

export default FinanceHeader