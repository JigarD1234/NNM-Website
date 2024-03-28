import React from 'react'
import { TbBusinessplan } from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";
import {  FaBusinessTime } from "react-icons/fa";


const Services = ({className ,heading ,desc1,desc2,desc3}) => {
    return (
        <>
        <div className={className}>
            
        <h3>{heading}</h3>
            <p><FaBusinessTime className='service-icons' />{desc1}</p>
            <p><TbBusinessplan className='service-icons' />{desc2}</p>
            <p><VscGraph className='service-icons' />{desc3}</p>
        </div>
        </>
    )
}

export default Services