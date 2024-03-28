import React from 'react'

const AboutHeader = ({heading}) => {
    return (
        <div id='about-hero'>
            <div className='container '>
                <div className='row'>
                    <div className='col-lg-12 about-hero-heading'>
                        <h3>{heading}</h3>
                        <h1>NNM Group's Legacy of Customized Solutions Since 1950. From Our Small Beginnings to a Team of 70+, We Prioritize Trust and Innovation to Serve Over<br></br> 19,000 Satisfied Clients</h1>
                        <div class="btn btn-three">
                            <span>GET IN TOUCH</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutHeader