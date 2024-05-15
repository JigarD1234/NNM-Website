import React from 'react'
import './Policy.css'
import PolicyNavigation from './PolicyNavigation'
import PolicyBgHeader from './PolicyBgHeader'
import PolicyData from './PolicyData'
import SelectedPolicy from './SelectedPolicy'

const termsAndConditions = [
    'Trading account (Commodity/Cash), Demat account, Net Trading account may be opened on prescribed form with the terms & conditions mentioned in it and can be obtained from any of our branches/franchisees/associates.',
    'Enquire from your member / franchisee/associates of all brokerage, commissions, fees and other charges which shall be levied on you for trading.',
    'NNM Securities Pvt. Ltd. shall not be responsible for any non - executed orders.',
    'Please confirm all your trades in your account on the same day evening. Any discrepancy, if found, to be brought into the notice immediately.',
    'Margin norms of the exchange / depository to be adhered and followed strictly.',
    'Please ensure that you must preserve documentary proof of your deposits having made with the member / franchisee.',
    'Link sites provided are not under control of NNM Securities Pvt. Ltd. NNM Securities Pvt. Ltd. has neither reviewed or approved these sites and is not responsible for.'
]


const TermsConditions = () => {
    return (
        <>
        <PolicyBgHeader NavigationHeader='terms and conditions'/>
        <div className='terms'>
            <div className='container'>
                <div className='row terms-row'>
                   <PolicyNavigation/>
                   <SelectedPolicy SelectedPolicyData={termsAndConditions} policyTitle='terms & conditions'/>
                </div>
            </div>
        </div>

        </>
    )
}

export default TermsConditions