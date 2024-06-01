import { FaFilePdf } from "react-icons/fa"
import { NavLink } from "react-router-dom"

function ResearchCard({ date, heading ,handleNoteDownload}) {
    return (
        <NavLink onClick={handleNoteDownload}>
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
export default ResearchCard