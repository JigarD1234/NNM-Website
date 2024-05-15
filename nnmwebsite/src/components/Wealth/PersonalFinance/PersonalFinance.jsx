import React, { useState } from 'react'
import FinanceHeader from '../FinanceHeader'
import NetWorth from './NetWorth'
import RetirementCorpus from './RetirementCorpus'
import ClearDebts from './ClearDebts'
import SIP from './SIP'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import { TiTick } from 'react-icons/ti'

const PersonalFinance = () => {
    const [stepsActive, setStepsActive] = useState("step-1")

    const handleStepChange = (stepNumber) => {
        setStepsActive(stepNumber)
    }

    return (
        <>
            <FinanceHeader quote='" Personal finance is only 20% head knowledge. It’s 80% behavior! "' person='Dave Ramsey' img='/personalfinance.svg' />
            <div className='how-to-start'>
                <div className='sec-headers'>
                    <h3>How to Start?</h3>
                </div>
                <div className='container'>
                    <div className='steps-to-be-followed'>
                        <h3>Steps To Be Followed:</h3>
                        <ul>
                            <li className={stepsActive === 'step-1' ? 'steps-active' : ''} onClick={() => handleStepChange("step-1")}><span>1</span>Calculate Your Financial Net Worth</li>
                            <li className={stepsActive === 'step-2' ? 'steps-active' : ''} onClick={() => handleStepChange("step-2")}><span>2</span>Calculate Your Retirement Corpus</li>
                            <li className={stepsActive === 'step-3' ? 'steps-active' : ''} onClick={() => handleStepChange("step-3")}><span>3</span>Retire Your Debts</li>
                            <li className={stepsActive === 'step-4' ? 'steps-active' : ''} onClick={() => handleStepChange("step-4")}><span>4</span>Based on your goals allocate funds (via SIP in debt/equity)</li>
                        </ul>
                    </div>
                </div>

            </div>

            {stepsActive === 'step-1' && <NetWorth />}
            {stepsActive === 'step-2' && <RetirementCorpus />}
            {stepsActive === 'step-3' && <ClearDebts />}
            {stepsActive === 'step-4' && <SIP />}

            <div className='tips-section'>
                <div className='container'>
                    <div className='sec-headers '>
                        <h3>Tips for savings</h3>
                    </div>

                    <ul>
                        <li><TiTick className='tick-icon'/> Try and Save 40% of your net income per month</li>
                        <li><TiTick className='tick-icon'/>6 months to be kept as reserve/ contingency fund</li>
                        <li><TiTick className='tick-icon'/>Invest this money in debt/ equity based on goals</li>
                        <li><TiTick className='tick-icon'/>Longer the horizon- higher allocation to Equities</li>
                        <li><TiTick className='tick-icon'/>Shorter the Horizon- Keep the funds in Debt</li>
                    </ul>
                </div>

            </div>


        </>
    )
}



export default PersonalFinance