import React from 'react'
import FinanceLabel from './FinanceLabel'

const RetirementCorpus = () => {
  return (
    <>
     <div className='retirement-corpus'>
                    <FinanceLabel heading='growing your retirement-corpus' />
                    <ul>
                        <li>Years of Retirement</li>
                        <li>Monthly Expenses</li>
                        <li>Expected Inflation</li>
                        <li>Expected Return Of Investment</li>
                    </ul>
                </div>

                <div className='retirement-corpus-content'>
                    <ul className='retirement-corpus'>
                        <li><strong>Years of Retirement:</strong> Start by estimating the duration of your retirement years, which forms the foundation for determining the necessary longevity of your retirement corpus.</li>
                        <li><strong>Monthly Expenses: </strong>Assess your current monthly expenses and project how they might change during retirement. Consider factors such as housing, healthcare, leisure activities, and any other lifestyle expenses you anticipate.</li>
                        <li><strong>Expected Inflation:</strong> Inflation erodes the purchasing power of money over time. Factor in an estimated rate of inflation to account for the rising cost of living throughout your retirement years.</li>
                        <li><strong>Expected Return on Investment:</strong> Identify a reasonable rate of return for your investment portfolio. This factor plays a crucial role in shaping the growth trajectory of your retirement corpus and directly impacts your ability to generate income during your retirement years.</li>

                    </ul>

                </div>
    
    </>
  )
}

export default RetirementCorpus