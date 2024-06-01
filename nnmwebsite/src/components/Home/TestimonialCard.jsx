import React from 'react'
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { IoStarSharp } from "react-icons/io5";

const TestimonialCard = ({heading , designation ,content}) => {
   
    return (
        <>
            <div className='row slide-top'>
                <div className='col-lg-3 top-first'>
                    <img src='/maleclipkart.png'/>
                </div>
                <div className='col-lg-9 top-second'>
                    <h3>{heading}</h3>
                    <p>{designation}</p>
                    <span>
                        <IoStarSharp/>
                        <IoStarSharp/>
                        <IoStarSharp/>
                        <IoStarSharp/>
                        <IoStarSharp/>
                    </span>
                </div>
            </div>
            <div className='slide-bottom'>
                <p><em><RiDoubleQuotesL className='quotes-icon'/> {content}<RiDoubleQuotesR className='quotes-icon'/></em></p>
            </div>
        </>
    )
}

export default TestimonialCard