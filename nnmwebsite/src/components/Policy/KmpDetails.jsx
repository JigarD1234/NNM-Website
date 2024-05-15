import React from 'react'
import PolicyNavigation from './PolicyNavigation'
import PolicyBgHeader from './PolicyBgHeader'
import PolicySecondCol from './PolicySecondCol'

const KmpDetails = () => {
    return (
        <>
            <PolicyBgHeader NavigationHeader='Key Managerial Personnel' />
            <div className='terms'>
                <div className='container'>
                    <div className='row terms-row'>
                        <PolicyNavigation />
                        <PolicySecondCol>
                            <h3>Key Managerial Personnel</h3>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Sr.No</th>
                                        <th>Name Of The Individual</th>
                                        <th>Designation</th>
                                        <th>Mobile Number</th>
                                        <th>Email Id</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Nikunj Anilkumar Mittal</td>
                                        <td>Managing Director</td>
                                        <td>9768006000</td>
                                        <td>nikunj@nnmsecurities.com</td>
                                    </tr>

                                    <tr>
                                        <td>2</td>
                                        <td>Apurva Mittal</td>
                                        <td>Whole Time Director</td>
                                        <td>9768009000</td>
                                        <td>apurva@nnmsecurities.com</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Nikunj Anilkumar Mittal</td>
                                        <td>Compliance Officer</td>
                                        <td>9768006000</td>
                                        <td>nikunj@nnmsecurities.com</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Nikhil Joshi</td>
                                        <td>Company Secretary</td>
                                        <td>9082267347</td>
                                        <td>nikhil@cokaco.com</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Premkumar Pandey</td>
                                        <td>Chief Financial Officer</td>
                                        <td>9768141010</td>
                                        <td>prem@nnmsecurities.com</td>
                                    </tr>

                                </tbody>


                            </table>
                            </PolicySecondCol>

                    </div>
                </div>
            </div>
        </>
    )
}

export default KmpDetails