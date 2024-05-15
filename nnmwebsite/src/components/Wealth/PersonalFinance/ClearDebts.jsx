import React from 'react'
import FinanceLabel from './FinanceLabel'

const ClearDebts = () => {
    return (
        <>
            <div className='retire-your-debts'>
                <FinanceLabel heading='Achieve Financial Freedom by Clearing Your Debts' />

                <div className='container'>
                    <div className='row retire-row'>
                        <div className='col-lg-6 retire-img'>
                            <img src='/debt.svg' />
                        </div>
                        <div className='col-lg-6 retire-details'>
                            <h3 className='sec-letter-spacing-heading'>Retire Your Debts</h3>
                            <h2>Attain Financial Independence Through Debt Elimination</h2>
                            <p>Retiring your debts is a pivotal step towards achieving financial freedom and securing a stable future. By eliminating outstanding debts, you alleviate financial burdens and create room for substantial savings and investments. Whether it's credit card debt, student loans, or mortgages, each debt paid off brings you closer to a debt-free lifestyle and opens up opportunities to build wealth. Our expert advisors can guide you through effective debt repayment strategies tailored to your financial situation, empowering you to take control of your finances and embark on the path to long-term financial security.</p>
                        </div>
                    </div>
                    <div className='row debts-row'>
                        <div className='col-lg-5 debts-col'>
                        <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Debt Snowball Method</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Prioritize the small debts first</td>

                                        </tr>
                                        <tr>

                                            <td>Motivate Yourself with small Victories</td>
                                        </tr>
                                        <tr>

                                            <td>See Instant Progress</td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                        </div>
                        <div className='col-lg-5 debts-col'>
                        <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Debt Avalanche Method</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Make Minimum Payments on all Loans</td>

                                        </tr>
                                        <tr>

                                            <td>Use Leftover Money to pay off highest interest rate loans</td>
                                        </tr>
                                        <tr>

                                            <td>Saves the most money in interest Payments</td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                        </div>
                    </div>
                </div>
            </div>
            

        </>
    )
}

export default ClearDebts