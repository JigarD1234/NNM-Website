import React, { useState } from 'react'
import './Downloads.css'
import PolicyBgHeader from '../Policy/PolicyBgHeader'
import { FaCloudDownloadAlt, FaFilePdf } from 'react-icons/fa'
import { downloadItems, pdfContent } from './downloadsData'

const Downloads = () => {
  const [downloadsActive, setDownloadsActive] = useState('Account Closure Form')
  const [searchTerm , setSearchTerm] =useState('')

   const filteredItems = downloadItems.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );


  function handleDownloadActive(activeDownloadName) {
    setDownloadsActive(activeDownloadName)
  }
  function handleNoteDownload(reportPdf) {
    const pdfPath = `/pdf/downloads/${reportPdf}.pdf`;
    const link = document.createElement('a');
    link.href = pdfPath;
    link.target = "_blank";
    // link.download = `${blog.ipoNotePdf}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
  return (
    <>
      <PolicyBgHeader NavigationHeader='Downloads' />
      <div className='downloads-section'>
        <div className='container'>
          <div className='row downloads-row '>
            <div className='col-lg-4 downloads-list-col'>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="downloads-search-input"
              />
              <ul>
                {
                  filteredItems.map(item => (
                    <li key={item} className={downloadsActive === item ? 'downloads-active' : ''} onClick={() => handleDownloadActive(item)}>{item}</li>
                  ))
                }
              </ul>
            </div>

            <div className='col-lg-8 downloads-list-details'>
              <h3>{downloadsActive}</h3>
              <hr className='mt-3' />
              <div className='download-pdf-wrapper'>
                {pdfContent[downloadsActive] ? pdfContent[downloadsActive].map((pdf, index) => (
                  <DownloadPdfCard key={index} heading={pdf.heading} handleNoteDownload={()=>handleNoteDownload(pdf.downloadsPDF)} />
                )) : <p>No Documents Available For The Selected Item</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
function DownloadPdfCard({ heading  , handleNoteDownload}) {
  return (
    <>
      <div className='download-pdf-card' onClick={handleNoteDownload}>
        <span><FaFilePdf className='download-pdf-icon' /></span>
        <h2>{heading}</h2>
        <button><FaCloudDownloadAlt />Download</button>
      </div></>
  )
}


export default Downloads