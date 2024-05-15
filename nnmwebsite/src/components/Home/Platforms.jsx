import React from 'react'

const Platforms = () => {
    return (
        <>
            <div className='platforms'>
                <div className='sec-headers sec-headers-dark'>
                    <h3 data-aos="fade-up" data-aos-delay="500">Our Platforms</h3>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 mt-5 d-flex justify-content-center'>
                            {/* <img src={telos} style={{ width: "90%" }} /> */}
                            <img data-aos="fade-up" data-aos-delay="600" src='/MobileViewAppDesignwhite.png' style={{ width: "90%" }} />
                        </div>
                        <div className='col-lg-6 platform-content'>
                            <h3 >Telos</h3>
                            <p >Experience the epitome of elegance with our sleek user interface, meticulously designed to provide a seamless and immersive trading experience. Navigate effortlessly through complex market landscapes, empowered by intuitive features and seamless functionality at every turn <br /><br /> Telos platform is your steadfast companion, empowering you to seize every opportunity and navigate the markets with confidence and poise</p>
                            <div data-aos="fade-up" data-aos-delay="600" className='google-btn'>
                                <a href='#'><img src='/googleplay.svg' /></a>
                                <a href='#'><img src='/appstore.svg' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Platforms