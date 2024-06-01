import React, { useState } from 'react'
import { FaArrowRight, FaFilePdf } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import ResearchCard from './ResearchCard';

const NNMResearch = () => {
    const reports = [
        {
            id: 1,
            date: '24-Apr-2018',
            heading: 'Zeal Report',
            reportPdf:'ZEAL_REPORT'
        },
        {
            id: 2,
            date: '21-Dec-2017',
            heading: 'Brigade Note Main',
            reportPdf:'BRIGADE_NOTE'
        },
        {
            id: 3,
            date: '20-Dec-2017',
            heading: 'Borosil Glass Work',
            reportPdf:'BOROSIL_GLASS'
        },
        {
            id: 4,
            date: '19-Dec-2017',
            heading: 'RBL Bank Note Main',
            reportPdf:'RBL_BANK'
        }
        
    ]
    const ipos=[
        {
            id: 1,
            date: '28-Mar-2024',
            heading: 'Aluwind Architectural IPO Note    '
        },
        {
            id: 2,
            date: '26-Oct-2023',
            heading: 'Shanthala FMCG Products Ltd'
        },
        {
            id: 3,
            date: '25-Oct-2023',
            heading: 'On Door Concepts Limited'
        },
        {
            id: 4,
            date: '22-Sep-2023',
            heading: 'Hi-Green Carbon'
        },
        
    ]
    const sortedReports = reports.slice().sort((a,b) => new Date(b.date) - new Date(a.date));
    const latestReports = sortedReports.slice(0,4)

    const sortedIpo = ipos.slice().sort((a,b)=> new Date(b.date) - new Date(a.date))
    const latestIpo = sortedIpo.slice(0,4)

    function handleNoteDownload(reportPdf) {
        const pdfPath = `/pdf/${reportPdf}.pdf`;
        const link = document.createElement('a');
        link.href = pdfPath;
        link.target = "_blank";
        // link.download = `${blog.ipoNotePdf}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }


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
                                    {
                                        latestReports.map(report => (
                                             <ResearchCard date={report.date} heading={report.heading} key={report.id} handleNoteDownload={()=>handleNoteDownload(report.reportPdf)}/>
                                        ))
                                    }
                                </>
                            ) : (
                                <>
                                {
                                        latestIpo.map(ipo => (
                                             <ResearchCard date={ipo.date} heading={ipo.heading} />
                                        ))
                                    }
                                    
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


export default NNMResearch