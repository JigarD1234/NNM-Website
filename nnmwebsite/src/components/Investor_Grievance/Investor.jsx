import React from 'react'
import './Investor.css'
import PolicyBgHeader from '../Policy/PolicyBgHeader'

const Investor = () => {
    return (
        <>
            <PolicyBgHeader NavigationHeader='Investor Grievance Escalation Matrix' />

            <div className='investor-grievance container table-responsive'>
                <table className='table table-bordered investor-table table-dark'>
                    <thead>
                        <th>Details of</th>
                        <th>Contact Person</th>
                        <th>Address</th>
                        <th>Contact No</th>
                        <th>Email Id</th>
                        <th>Working Hours</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Client Servicing</td>
                            <td>Vinod Mali</td>
                            <td>304, Upvan 4A, Bolinj Naka, Virar - West, Palghar - 401303</td>
                            <td>9768141923 / 40790033</td>
                            <td>cdsl@nnmsecurities.com</td>
                            <td>Mon- Fri: 9:00 AM TO 7:00 PM Sat: 10:00 AM TO 4:00 PM</td>
                        </tr>
                        <tr>
                            <td>Customer care</td>
                            <td>Pravin J Dadlika</td>
                            <td>D602, Indralok Phase - 8, Bhayandar – East, Thane - 401105</td>
                            <td>9768141020 / 40790015</td>
                            <td>pravin@nnmsecurities.com</td>
                            <td>Mon- Fri: 9:00 AM TO 7:00 PM Sat: 10:00 AM TO 4:00 PM</td>
                        </tr>
                        <tr>
                            <td>Head of Client Servicing/Head of Customer care</td>
                            <td>Prem Kumar Pandey</td>
                            <td>D603, Indralok Phase - 8, Bhayandar – East, Thane - 401105</td>
                            <td>9768141010 / 40790037</td>
                            <td>accounts@nnmsecurities.com</td>
                            <td>Mon- Fri: 9:00 AM TO 7:00 PM Sat: 10:00 AM TO 4:00 PM</td>
                        </tr>
                        <tr>
                            <td>Compliance Officer</td>
                            <td>Apurva Mittal / Nikunj Anilkumar Mittal</td>
                            <td>B 6/7, Shri Siddhi Vinayak Plaza, Andheri - West, Mumbai - 4000053</td>
                            <td>9152943075 / 40790034</td>
                            <td>apurva@nnmsecurities.com / nikunj@nnmsecurities.com</td>
                            <td>Mon- Fri: 9:00 AM TO 7:00 PM Sat: 10:00 AM TO 4:00 PM</td>
                        </tr>
                        <tr>
                            <td>CEO</td>
                            <td>Nikunj Anilkumar Mittal</td>
                            <td>B 6/7, Shri Siddhi Vinayak Plaza, Andheri - West, Mumbai - 4000053</td>
                            <td>9768006000 / 40790011</td>
                            <td>nikunj@nnmsecurities.com</td>
                            <td>Mon- Fri: 9:00 AM TO 7:00 PM Sat: 10:00 AM TO 4:00 PM</td>
                        </tr>

                    </tbody>


                </table>

            </div>
        </>
    )
}

export default Investor