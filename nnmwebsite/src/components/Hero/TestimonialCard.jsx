import React from 'react'
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { IoStarSharp } from "react-icons/io5";

const TestimonialCard = () => {
   
    return (
        <>
            <div className='row slide-top'>
                <div className='col-lg-3 top-first'>
                    IMG
                </div>
                <div className='col-lg-9 top-second'>
                    <h3>Heading</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
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
                <p><em><RiDoubleQuotesL className='quotes-icon'/> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi error ratione vel odit ab dolor harum consectetur,Lorem ipsum dolor sit amet.,Lorem ipsum dolor sit, amet consectetur <RiDoubleQuotesR className='quotes-icon'/></em></p>
            </div>
        </>
    )
}

export default TestimonialCard