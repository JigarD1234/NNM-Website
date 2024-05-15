import React from 'react'
import { PiArrowCircleRightFill } from 'react-icons/pi'

const PolicyData = ({ data, index ,para}) => {
    return (
        <>
            <li><PiArrowCircleRightFill className='policy-icon'/>{data}</li>
            {para ? (<p>{para}</p>):''}
        </>
    )
}

export default PolicyData