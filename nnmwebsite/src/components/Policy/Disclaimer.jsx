import React from 'react'
import PolicyNavigation from './PolicyNavigation'
import PolicyBgHeader from './PolicyBgHeader'
import PolicySecondCol from './PolicySecondCol'

const Disclaimer = () => {
  return (
    <>
     <PolicyBgHeader NavigationHeader='disclaimer'/>
        <div className='terms'>
            <div className='container'>
                <div className='row terms-row'>
                   <PolicyNavigation/>

                    <PolicySecondCol>
                    <h3>Disclaimer</h3>
                    <p className='privacy-policy-first-para'>The information in this documents has been printed on the basis of publicly available information, internal data and other reliable sources believed to be true and is for general guidance only. While every effort is made to ensure the accuracy and completeness of information contained, the company makes no guarantee and assumes no liability for any errors or omissions of the information. No one can use the information as the basis for any claim, demand or cause of action. NNM Securities Pvt. Ltd., Vibhuti Commodities Pvt Ltd and its affiliates, including the analyst who have issued this report, may, on the date of this report, and from time to time, have long or short positions in, and buy or sell the securities of the companies mentioned herein or engage in any other transaction involving such securities and earn brokerage or compensation or act as advisor or have other potential conflict of interest with respect to company/ies mentioned herein or inconsistent with any recommendation and related information and opinions.</p>
                    <p>NNM Securities Pvt. Ltd., Vibhuti Commodities Pvt Ltd and its affiliatesmay seek to provide or have engaged in providing corporate finance, investment banking or other advisory services in a merger or specific transaction to the companies referred to in this report, as on the date of this report or in the past. “The Stock Exchange, Mumbai is not in any manner answerable, responsible or liable to any person or persons for any acts of omission or commission, errors, mistakes and/or violation, actual or perceived, by us or our partners, agents, associates etc., of any of the Rules, Regulations, Bye-laws of the Stock Exchange, Mumbai, SEBI Act or any other laws in force from time to time. The Stock Exchange, Mumbai is not answerable, responsible or liable for any information on this Website or for any services rendered by our employees, our servants, and us. </p>
                    </PolicySecondCol>
                   </div>
                </div>
            </div>
    
    </>
  )
}

export default Disclaimer