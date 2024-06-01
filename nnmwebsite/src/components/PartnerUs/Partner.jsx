import React, { useEffect, useState } from 'react'
import './Partner.css'

const Partner = () => {
    const [activeDetail, setActiveDetail] = useState('identification')

    function handleActiveDetail(detailName) {
        setActiveDetail(detailName)
    }


    return (
        <>
            <div className='partner-us'>
                <div className='container'>
                    <div className='row partner-row'>
                        <div className='col-lg-6 partner-details-col'>
                            <h2>Become Our <span>Business Partner</span></h2>
                            <p>Established in 1950, NNM Securities is one of the India's leading boutique financial services firm Brokerage services in the areas of equities & commodities, mutual funds, insurance, corporate deposits, bonds & loans to Institutions, High-netwoth individuals and families, retails, offering Wealth Management, Investment Banking.</p>
                            <button>Open An Account</button>
                        </div>
                        <div className='col-lg-6 partner-form-col'>
                            <form className='partner-form'>
                                <input type='text' placeholder='Name' />
                                <input type='number' placeholder='Mobile' />
                                <input type='email' placeholder='Email' />
                                <input type='date' placeholder='Date Of Birth' />
                                <textarea placeholder='Address'></textarea>
                                <input type='number' placeholder='Pincode' />
                                <input type='text' placeholder='State' />
                                <input type='text' placeholder='City' />
                                <input type='text' placeholder='Sub Broker' />
                                <div className='partner-us-button'>
                                    <button>Partner Us Now</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
            <div className='account-checklist'>
                <div className='container'>
                    <h2>Documents Checklist for Open An Account</h2>
                    <hr className='mt-3' style={{ opacity: '0.5' }} />
                    <ul>
                        <li className={activeDetail==='identification'?'checklist-active':''} onClick={()=>handleActiveDetail('identification')}>Identification Proof</li>
                        <li className={activeDetail==='address'?'checklist-active':''} onClick={()=>handleActiveDetail('address')}>Address Proof</li>
                        <li className={activeDetail==='bank'?'checklist-active':''} onClick={()=>handleActiveDetail('bank')}>Bank Proof</li>
                        
                    </ul>
                    <div className='detailed-card-wrapper'>
                        {activeDetail === 'identification' ? (
                            <>
                                <DetailedCard heading='Aadhar Card' paragraph='Colored Photocopy of Front & Reverse side of Card Required' />
                                <DetailedCard heading='PAN Card' paragraph='Mandatory (Colored Photocopy Preferred). Name, Photograph, Date of Birth should match. Signature should be clearly visible. home/office' />
                                <DetailedCard heading='Driving License' paragraph='Photocopy of Name & Address Page Required .Driving License should be valid for minimum next 2 months from the date of Account Activation. Learning License is Not Acceptable.' />
                                <DetailedCard heading='Voter ID' paragraph='Photocopy of Name & Address Page Required' />
                                <DetailedCard heading='Passport' paragraph='Photocopy of Name & Address Page Required. Passport should be valid for minimum next 2 months from the date of Account Activation. Signature should be clearly visible' />

                            </>
                        ) : activeDetail === 'address' ? (
                            <>
                                 <DetailedCard heading='Passport' paragraph='Photocopy of Name & Address Page Required. Passport should be valid for minimum next 2 months from the date of Account Activation. Address mentioned in Passport & KYC should match.' />
                                 <DetailedCard heading='Driving License' paragraph='Photocopy of Name & Address Page Required. Driving License should be valid for minimum next 2 months from the date of Account Activation. Learning License is Not Acceptable. Address mentioned in the Driving License & KYC should match.' />
                                 <DetailedCard heading='Voter ID' paragraph='Photocopy of Name & Address Page Required. Address mentioned in the Voter ID & KYC should match.' />
                                 <DetailedCard heading='Ration Card' paragraph='Photocopy of Name/Address & Family Members list page required. Address mentioned in the Ration Card & KYC should match.' />
                                 <DetailedCard heading='Aadhaar Card' paragraph='Colored Photocopy of Front & Reverse side of Card Required. Address mentioned in the Aadhaar Card & KYC should match' />
                                 <DetailedCard heading='Utility Bills (Telephone & Electricity Bills)' paragraph='Photocopy of Telephone/Electricity bill is required. The proof should not be 3 months old. Should be valid for next 10 days post Activation. Address mentioned in the Telephone/Electricity & KYC should match.' />
                                 <DetailedCard heading='Bank Statement' paragraph='Original Bank Statement of latest quarter (3 months transactions). Bank Attestation is Mandatory where the Bank Statement does not contain pre-printed Bank Logo, address & other relevant details about the bank. (Bank Attestation should contain Authorized signatory of Bank with Name, Employee Code & Bank Seal). Address mentioned in the Bank Statement & KYC should match' />
                                 <DetailedCard heading='Bank Passbook' paragraph='Bank Passbook containing Bank Details & Client Details with latest quarter transaction (3 months transactions) pages is required. Bank Attestation is Mandatory where the Bank Passbook does not contain pre-printed Bank Logo, address & other relevant details about the bank. (Bank Attestation should contain Authorized signatory of Bank with Name, Employee Code & Bank Seal). Address mentioned in the Bank Passbook & KYC should match.' />
                            </>
                        ) : activeDetail === 'bank'?(
                            <>
                            
                            <DetailedCard heading='Bank Passbook' paragraph='Bank Passbook containing Bank Details & Client Details with latest quarter transaction (3 months transactions) pages is required. Bank Attestation is Mandatory where the Bank Passbook does not contain pre-printed Bank Logo, address & other relevant details about the bank. (Bank Attestation should contain Authorized signatory of Bank with Name, Employee Code & Bank Seal).The details such as A/c Holder Name, Bank A/c No., Bank A/c Type should match with details mentioned in KYC.' />
                            <DetailedCard heading='Bank Statement' paragraph='Original Bank Statement of latest quarter (3 months transactions). Bank Attestation is Mandatory where the Bank Statement does not contain pre-printed Bank Logo, address & other relevant details about the bank.(Bank Attestation should contain Authorized signatory of Bank with Name, Employee Code & Bank Seal). The details such as A/c Holder Name, Bank A/c No. Bank A/c Type should match with details mentioned in KYC.' />
                            <DetailedCard heading='Cancelled Cheque' paragraph='Original Cancelled Cheque having Pre-printed Client Name, A/c No., IFSC & MICR is required. The details such as A/c Holder Name, Bank A/c No. Bank A/c Type should match with details mentioned in KYC.' />
                            
                            </>
                        ):''}
                    </div>
                    <h2>Note</h2>
                    <hr className='mt-3' style={{ opacity: '0.5' }} />
                    <p>In case there is Name or Signature Mismatch in any of the given proofs then Bank Verification Letter is required. Bank Verification Letter should contain Bank's Original Letter Head. Client’s photo should be attested along with Client Name, A/c No., Address, Signature, A/c Type, IFSC, MICR. Bank Attestation should contain Authorized Signatory of Bank with Name, Employee Code & Bank Seal. The details such as A/c Holder Name, Bank A/c No. Bank A/c Type should match with details mentioned in KYC. Click here to download Bank Verification Letter.</p>
                </div>
            </div>
        </>
    )
}

// const Partner = ()=>{
//     const [countries , setCountries] = useState()
//     const [error , setError] = useState()

//     useEffect(()=>{
//         const fetchCountries = async ()=>{
//             try{
//                 const headers = new Headers();
//                 headers.append("X-CSCAPI-KEY" , "API-KEY");

//                 const requestOptions = {
//                     method:'GET',
//                     headers:headers,
//                     redirect:'follow'
//                 }
//                 const response = await fetch("https://api.countrystatecity.in/v1/countries" , requestOptions);
//                 const result = await response.json()
//                 setCountries(result)
//             }
//             catch(error){
//                 setError(error)
//             }
//         }
//     })
//     return(
//         <>
//         <h1>Country List</h1>
//         <ul>
//             {countries.map(country=>(
//                 <li key={countries.iso2}>{country.name}</li>
//             ))}
//         </ul>

//         </>
//     )
// }

function DetailedCard({ heading, paragraph }) {
    return (
        <div className='detailed-card'>
            <h2>{heading}</h2>
            <p>{paragraph}</p>
        </div>
    )
}


export default Partner