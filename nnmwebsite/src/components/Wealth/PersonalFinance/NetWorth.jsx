import React from 'react'
import FinanceLabel from './FinanceLabel'
import FinanceHeader from '../FinanceHeader'

const NetWorth = () => {
  return (
    <>
                
                <div className='net-worth '>
                    <FinanceLabel heading='Prepare Your Financial Inventory and know your Net Worth' />
                    <div className='container'>
                        <div className='net-content-row row'>
                            <div className='col-lg-6 net-content-col'>
                                <h3 className='sec-letter-spacing-heading'>Understanding Your Financial Net Worth</h3>
                                <h2>Assessing Your Financial Health Through Assets and Liabilities</h2>
                                <p> Assets encompass everything you own that holds value, including cash, investments, real estate, and valuable possessions like vehicles or jewelry. On the other hand, liabilities represent your financial obligations, such as mortgages, loans, credit card debt, and other outstanding payments. Subtracting your total liabilities from your total assets yields your net worth, a figure that reflects your true financial standing.</p>
                                <p>A positive net worth signifies that your assets outweigh your liabilities, indicating financial stability and potential for growth. Conversely, a negative net worth suggests that your liabilities exceed your assets, highlighting areas where you may need to focus on reducing debt and increasing savings.</p>
                            </div>
                            <div className='col-lg-6 net-content-img'>
                                <img src='/assetsliability.svg' />
                            </div>
                        </div>
                        <div className='row net-worth-row'>
                            <div className='col-lg-3  table-col'>
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Assets</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Money In Your Bank Accounts</td>
                                        </tr>
                                        <tr>

                                            <td>Home Equity</td>
                                        </tr>
                                        <tr>

                                            <td>Car Equity</td>
                                        </tr>
                                        <tr>

                                            <td>Gold</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='col-lg-1 difference-col'>
                                <span>-</span>
                            </div>
                            <div className='col-lg-3  table-col'>
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Liabilities</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Student Loan Balance</td>

                                        </tr>
                                        <tr>

                                            <td>Mortgage</td>
                                        </tr>
                                        <tr>

                                            <td>Credit/Debit Card</td>
                                        </tr>
                                        <tr>

                                            <td>Owing Money To Family & Friends</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='col-lg-1 difference-col'>
                                <span>=</span>
                            </div>
                            <div className='col-lg-3 final-net-worth'>
                                <h3>Your Net Worth</h3>
                                <img src='/networth.svg' />
                            </div>
                        </div>
                    </div>
                </div>
    
    
    </>
  )
}

export default NetWorth