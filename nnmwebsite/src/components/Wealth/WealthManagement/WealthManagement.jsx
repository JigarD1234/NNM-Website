import React from 'react'
import FinanceHeader from '../FinanceHeader'
import { GoAlertFill, GoGoal } from "react-icons/go";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineRateReview, MdPersonPin } from "react-icons/md";
import { BiRightArrowCircle } from 'react-icons/bi';

const WealthManagement = () => {
    return (
        <>
            <FinanceHeader quote='" Personal finance is only 20% head knowledge. It’s 80% behavior! "' person='Dave Ramsey' img='/personalfinance.svg' />
            <div className='wealth-management-section'>
                <div className='container'>
                    <div className='wm-content sec-headers'>
                        <h3>Grow Your Financial Future</h3>

                        <p>
                            Guiding you through the steps to nurture and grow your financial future. Managing your wealth isn't just about earning money; it's about making smart decisions and planning strategically. Here's our roadmap to help you navigate your financial journey:
                        </p>
                    </div>
                    <div className='wm-card-wrapper row'>
                        <CardMain icon={<GoGoal className='wm-icon' />} heading='Identify Your Financial Goals' paragraph="Begin by identifying your short-term and long-term financial goals. Whether it's buying a house, funding your child's education, or building a retirement corpus, understanding your objectives is the first step towards effective financial planning" img='/nnmwealth1.jpg' number={1}/>
                        <CardMain icon={<GoAlertFill className='wm-icon' />} heading='Assess Your Risk Tolerance' paragraph="Evaluate your risk tolerance to determine the proportion of funds you're comfortable allocating to equity and debt investments. Generally, equity investments carry higher risk but offer  higher returns, while debt investments provide stability and steady income with lower risk." img='/nnmwealth2.jpg' number={2}/>
                        <CardMain icon={<GiTakeMyMoney className='wm-icon' />} heading='Allocate Funds Accordingly' paragraph=" For long-term goals with a higher risk appetite, consider allocating a larger portion to equity SIPs to benefit over time. For short-term goals or those with lower risk tolerance, allocate more funds to debt SIPs to prioritize capital preservation and income generation." img='/nnmwealth3.jpg' number={3}/>
                        <CardMain icon={<MdOutlineRateReview className='wm-icon' />} heading='Regularly Review and Adjust' paragraph=" Regularly review your investment portfolio and adjust your asset allocation as needed based on changes in your financial situation, market conditions, and investment goals. Rebalancing your portfolio ensures that it remains aligned with your objectives and risk tolerance" img='/nnmwealth3.jpg' number={4} />
                        <CardMain icon={<MdPersonPin className='wm-icon' />} heading='Seek Professional Advice' paragraph=" Consider seeking professional advice from a financial advisor to help you develop a customized investment strategy tailored to your specific needs and goals. A financial advisor can provide valuable insights, guidance, and recommendations to optimize your  portfolio" img='/nnmwealth3.jpg' number={5}/>
                    </div>
                </div>

            </div>

            <div className='why-choose-nnmwealth'>
                <div className='container'>
                    <div className='row nnmwealth-row'>
                       <div className='col-lg-7 nnmwealth-details'>
                        <h2>Why Choose NNM For wealth management ?</h2>
                        <p>NNM offers a comprehensive range of Wealth Management, and Wealth Protection solutions through our expert team and trusted partners, each a leader in their respective fields. Our solutions encompass:</p>
                        <ul>
                            <li><BiRightArrowCircle className='nnmwealth-icon'/>Direct equity</li>
                            <li><BiRightArrowCircle className='nnmwealth-icon'/> General Insurance covering health, business, and asset protection</li>
                            <li><BiRightArrowCircle className='nnmwealth-icon'/> Portfolio Management Services (PMS) and spanning equity .</li>
                            <li><BiRightArrowCircle className='nnmwealth-icon'/> Bonds and Deposits issued by Government entities and Corporates.</li>
                            <li><BiRightArrowCircle className='nnmwealth-icon'/> Structured Products tailored for Wealth Creation.</li>
                            <li><BiRightArrowCircle className='nnmwealth-icon'/> Life Insurance Solutions addressing both risk coverage and investment needs.</li>
                            <li><BiRightArrowCircle className='nnmwealth-icon'/> Mutual Funds enabling investment diversification across Indian  markets and various asset classes.</li>
                        </ul>
                       </div>
                       <div className='col-lg-5 nnmwealthimg-col'>
                        <img src='/whynnmwealthmanagement.svg'/>
                       </div>
                    </div>
                </div>
            </div>

            <div className='wealth-last-section container'>
                <h2>"Short-term investments are the flashy fireworks of finance, while long-term investments are the enduring glow of a bonfire."</h2>
                <button>Contact With Our Advisor Now</button>
                
            </div>
        </>
    )
}

function CardMain({ icon, heading, paragraph, img , number }) {
    return (
        <>
            <div className='col-lg-4' >
                <div className='wm-card-main' style={{
                    background: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.8)),url(${img})`, backgroundSize: 'cover'
                }} >
                    <div className='wm-card-col'>

                        <div className='numb-block'>
                           <h3> {number}</h3>
                        </div>
                            {icon}
                        <h2>{heading}</h2>
                        <p> {paragraph}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WealthManagement