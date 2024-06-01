import React from 'react'
import PolicyBgHeader from './PolicyBgHeader'
import PolicyNavigation from './PolicyNavigation'
import SelectedPolicy from './SelectedPolicy'
import { PiArrowCircleRightFill } from 'react-icons/pi'
import PolicySecondCol from './PolicySecondCol'

const PrivacyPolicy = () => {
  const privacyPolicy = [

  ]
  return (
    <>
      <PolicyBgHeader NavigationHeader='privacy policy' />
      <div className='terms'>
        <div className='container'>
          <div className='row terms-row'>
            <PolicyNavigation />
            <PolicySecondCol>
              <h3>Privacy Policy</h3>
              <p className='privacy-policy-first-para'>NNM Securities Private Limited does not collect personal information about individuals except when such individuals specifically provide such information on a voluntary basis.</p>
              <p>NNM Securities Private Limited is and attempts to be too sensitive to your privacy on the Internet. Whenever possible, NNM Securities will attempt to treat the information about you it receives on the Internet with care deemed reasonable under the circumstances. NNM Securities Private Limited uses information provided by you (if any) to measure the use of our site and to improve the content of our site. The personal information we may collect is used only by us to respond to your inquiry, we may make the e-mail addresses, of those who provide information, available to other NNM Securities Private Limited companies which have equal or better privacy policy than we do. At times cookies may be used to provide you with certain information. A cookie is a tiny element of data that a web site can send to your browser, which may then be stored on your hard drive so we can recognize you when you return. You may set your browser to notify you when you receive a cookie.</p>

              <h4><PiArrowCircleRightFill className='policy-icon'/>Collection and use of customer personal information:</h4>
              <p>NNM Securities Private Limited may or may not collect your Personal Information to provide services on its web based platform or mobile application. While opening a trading and demat account with NNM Securities Private Limited, you may be asked for certain Sensitive Personal Data or Information (as defined under the Information Technology Act, 2000) to complete your KYC (as per the ‘Know Your Client’ requirements set by SEBI) and as per the Prevention of Money Laundering Act, 2002.</p>
              <p>NNM Securities Private Limited, may or may not, request for sensitive information from you at the time of account opening, which would include but not be limited to, (i) setting a password; (ii) financial information such as Bank account or credit card or debit card or other payment instrument details; (iii) information such as name, contact number, gender, date of birth, residence and employment addresses, father’s/mother’s and spouses names, bank account details, scans/copies of document proofs of address & identity such as Photograph, PAN, passport, driver’s license, Aadhaar (voluntarily) etc. (iv) uploading signature proof/photo etc. All such information would be for the purpose of: identity verification and background checking for account opening as per KYC & AML Rules, personalizing services offered to you, keeping you updated of our products and services relevant to you, information pertaining to our services you’ve subscribed to, and for any legal and regulatory / audit purposes.</p>
              <p>Under Regulation 5 of the Information Technology (Reasonable Security and Procedures and Sensitive Personal Data or Information) Rules, 2011, NNM Securities Private Limited is obliged to provide every registered user of NNM Securities Private Limited with a readable copy of the personal information you have provided us.</p>
              <p>We would save such information as required by the law, and as directed by the regulators along with such intermediaries regulated by them, for the purpose of offering you our services, and for such further regulatory, audit, and business purposes. We collect Personal Information from you only when you voluntarily use the services provided by us, and/or enquire to begin an association with us and/or complete the process of opening an account with us.</p>
              <p>With regard to security, we respect all information provided to us, and take all reasonable steps towards protection of the same. We have implemented technology and policies, with the objective of protecting your privacy from unauthorized access and improper use, and periodically review the same. We maintain procedural safeguards to protect the confidentiality and security of personally identifiable information transmitted to us.</p>
              <h4><PiArrowCircleRightFill className='policy-icon'/>Usage of Cookies</h4>
              <p>NNM Securities Private Limited may from time to time use cookies. Cookies are small data files that a website stores on Your computer. NNM Securities Private Limited may use persistent cookies which are permanently placed on your computer to store non-personal (Browser, ISP, OS, Clickstream information etc) and profiling information (age, gender, income etc). While cookies have unique identification nos, personal information (name, a/c no, contact nos etc) shall not be stored on the cookies. We will use the information stored in the cookies to improve your browsing experience on our website, by throwing up relevant content where possible. We will also use the cookies to store visitor preferences to ease visitor navigation on the site.</p>
              <h4><PiArrowCircleRightFill className='policy-icon'/>Usage Disclosure and Transfer of collected information</h4>
              <p>NNM Securities Private Limited does not share any of your information with third parties except: (i) with respect to providing the information or services that you have requested earlier, (ii) or with your express permission for sharing such information, or (iii) with intermediaries/applications who require such information as per regulatory requirements and procedure laid down by SEBI/Exchanges.</p>
              <p>Under no circumstances will we sell or rent your personal information to anyone, for any reason, at any time. NNM Securities Private Limited has taken best and reasonable steps to ensure prevention of any unauthorized disclosure of your sensitive personal information.</p>
              <p>Disclosure for regulatory compliances: NNM Securities Private Limited will share your information with judicial, administrative and regulatory entities to comply with any legal and regulatory requirements.</p>
              <p>Disclosure for regulatory compliances: NNM Securities Private Limited will share your information with judicial, administrative and regulatory entities to comply with any legal and regulatory requirements.</p>

              <h4><PiArrowCircleRightFill className='policy-icon'/>Security</h4>
              <p>We at nnmsecurities.com hereby acknowledge and accept that we use an advanced 128 bit encryption technology, the Secure Socket Layer (SSL), which is one of the best available technology to ensure that the information transmitted between you and us across the Internet is safe and cannot be accessed by any outsider.</p>
              <p>To ensure security of access to the personal information and transaction details, the access to the secured zone of our website is restricted by the unique login ID and Password selected by you. You should be very careful in handling the ID and password and you should ensure that you do not reveal it to anybody, nor do you keep it in writing. You should keep changing your password periodically. As a matter of precaution, we always give the details of your last login each time you log on to our site. In case you feel that the detail is not matching with your last login profile, it should give you an indication that somebody has been able to crack your login and password and is having unauthorized access to your details. In such circumstance, you should immediately change the password and also inform us about it.</p>
              <p>You should ensure that each time you leave your terminal you log yourself out. This prevents someone else from accessing your account if you leave your computer and your session has not “timed out”</p>
              <p>We encourage you to review the privacy statements of other Web sites to which links may be provided through nnmsecurities.com so that you are aware of the privacy policies of these web sites too. We are not responsible for the privacy statements or other content on web sites outside of those of nnmsecurities.com.</p>
              </PolicySecondCol>

              





          </div>
        </div>
      </div>


    </>
  )
}

export default PrivacyPolicy