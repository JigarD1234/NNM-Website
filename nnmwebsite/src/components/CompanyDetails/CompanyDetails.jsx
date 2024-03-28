import React from 'react'
import { useLocation, useParams } from 'react-router-dom'



const CompanyDetails = () => {
    const {companyName} = useParams();
    // const location = useLocation()
    // console.log(location)
    // console.log(useParams())

  

  return (
    <div className='company-details' style={{paddingTop:"10%"}}>
        <h3>{companyName}</h3>
    </div>
  )
}

export default CompanyDetails