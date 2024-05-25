import React, { useState } from 'react'
import { FaArrowRight, FaFilePdf } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const NNMResearch = () => {
    const [activeResearch, setActiveResearch] = useState('Analysis');

    function handleActiveResearch(researchName) {
        setActiveResearch(researchName)
    }
    return (
        <div className='nnm-research'>
            <div className='sec-headers sec-headers-dark'>
                <h3>NNM Research</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, aspernatur!</p>
            </div>
            <div className='container'>
                <div className='row nnm-research-row'>

                    <div className='col-lg-7'>
                        <div className='nnm-research-col'>
                            <ul>
                                <li className={activeResearch === 'Analysis' ? 'research-active' : ''} onClick={() => handleActiveResearch('Analysis')}>Fundamental Analysis</li> <span>|</span>
                                <li className={activeResearch === 'IPO' ? 'research-active' : ''} onClick={() => handleActiveResearch('IPO')}>IPO Note</li>
                            </ul>
                            <p>More On NNM Research <FaArrowRight className='more-icon' /></p>
                        </div>

                        {/* <hr></hr> */}
                        <div className='research-card-wrapper'>
                            {activeResearch === 'Analysis' ? (
                                <>
                                    <ResearchCard date='15-Apr-2018' heading='Zeal Report' />
                                    <ResearchCard date='15-Apr-2018' heading='Zeal Report' />
                                    <ResearchCard date='15-Apr-2018' heading='Zeal Report' />
                                    <ResearchCard date='15-Apr-2018' heading='Zeal Report' />
                                </>
                            ) : (
                                <>
                                    <ResearchCard date='15-Apr-2018' heading='IPO Note' />
                                    <ResearchCard date='15-Apr-2018' heading='IPO Note' />
                                    <ResearchCard date='15-Apr-2018' heading='IPO Note' />
                                    <ResearchCard date='15-Apr-2018' heading='IPO Note' />
                                </>

                            )}

                        </div>
                    </div>
                    <div className='col-lg-5 nnm-research-img'>
                        <img src='/researchsvg.svg' />
                    </div>
                </div>
            </div>
        </div>

    )
}
function ResearchCard({ date, heading }) {
    return (
        <NavLink>
            <div className='research-card'>
                <p><FaFilePdf /></p>
                <div className='research-card-content'>
                    <span>{date}</span>
                    <h3>{heading}</h3>
                </div>
                <div className='research-card-icon'>
                    <FaFilePdf />
                </div>
            </div>
        </NavLink>
    )
}

export default NNMResearch