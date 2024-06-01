import React from 'react'
import PolicyBgHeader from '../Policy/PolicyBgHeader'
import './Investor.css'

const ClientAccountDetails = () => {
    return (
        <>

            <PolicyBgHeader NavigationHeader='Client Bank Account Details' />
            <div className='investor-grievance container '>
               <div className='table-responsive'>
                
               <table className='table table-bordered investor-table table-dark '>
                    <thead>
                        <th>Sr No</th>
                        <th>Account No</th>
                        <th>Bank Account Name</th>
                        <th>Bank Name</th>
                        <th>IFSC Code</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>008620100014314</td>
                            <td>NNM Securities Pvt Ltd- Up Streaming Client Nodal Bank Account</td>
                            <td>Bank of India</td>
                            <td>BKID0000086</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>000405104483</td>
                            <td>NNM Securities Pvt Ltd- Up Streaming Client Nodal Bank Account</td>
                            <td>ICICI Bank</td>
                            <td>ICIC0000004</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>008620110001333</td>
                            <td>NNM Securities Pvt Ltd- Up Streaming Client Nodal Bank Account</td>
                            <td>Bank of India</td>
                            <td>BKID0000086</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>008620110002895</td>
                            <td>NNM Securities Pvt Ltd- Up Streaming Client Nodal Bank Account</td>
                            <td>Bank of India</td>
                            <td>BKID0000086</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>008620110003066</td>
                            <td>NNM Securities Pvt Ltd- Up Streaming Client Nodal Bank Account</td>
                            <td>Bank of India</td>
                            <td>BKID0000086</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>008620110003107</td>
                            <td>NNM Securities Pvt Ltd- Up Streaming Client Nodal Bank Account</td>
                            <td>Bank of India</td>
                            <td>BKID0000086</td>
                        </tr>

                    </tbody>


                </table>
               </div>
            </div>

        </>
    )
}

export default ClientAccountDetails