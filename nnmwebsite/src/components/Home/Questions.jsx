import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from './AccordionItem';

const Questions = () => {
    return (
        <div className='questions'>
            <div className='sec-headers question-header'>
                <h3>Frequently Asked Questions</h3>
            </div>
            <div className='container'>
                <div className='row faq-wrapper'>
                    <div className='col-lg-5 faq-content'>
                        <h3>We understand that you may have questions about our products/services, and we're here to provide you with answers</h3>
                        <p>
                            If you can't find the answer you're seeking within our FAQ section, we encourage you to get in touch with our dedicated support team. Our knowledgeable and friendly representatives are here to assist you with any inquiries or concerns you may have</p>
                        <button className='faq-btn'>Get-In-Touch</button>
                    </div>
                    <div className='col-lg-6'>
                        <Accordion flush className='custom-accordion' defaultActiveKey="0">
                            <Accordion.Item eventKey="0" className='accordion-item'>
                                <AccordionItem heading="What are Demat Accounts and what's their purpose ?" description="A demat account, also known as a 'dematerialized account,' serves as an electronic repository for stocks, bonds, mutual funds, and various securities in digital format. It simplifies trading and investment activities by eliminating the need for physical share certificates." />
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className='accordion-item'>
                                <AccordionItem heading='What is the difference between trading account and demat account ?  ' description="While a trading account is utilized for executing buy and sell orders for stocks and securities, a demat account serves the purpose of securely holding these securities in electronic form. Both accounts complement each other, facilitating seamless trading and investment endeavors in the stock market." />
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className='accordion-item'>
                                <AccordionItem heading='What are the different types of demat accounts ?' description="Discover the various types of demat accounts as per your different needs. These include Regular Demat Accounts, designed for residents of India, Repatriable Demat Accounts, aimed at non-resident Indians (NRIs) who wish to transfer funds abroad, and Non-Repatriable Demat Accounts, which cater to NRIs without provision for international fund transfers." />
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" className='accordion-item'>
                                <AccordionItem heading='Can i have multiple demat accounts ?' description="Learn about the flexibility of opening multiple demat accounts, either with the same depository participant or different ones, providing convenience and options for investors." />
                            </Accordion.Item>
                            <Accordion.Item eventKey="4" className='accordion-item'>
                                <AccordionItem heading="Can Demat Account Have Joint Holders" description="Explore the possibility of opening demat accounts jointly, allowing for a maximum of three holders, including one main holder and up to two joint holders, ensuring shared ownership and management." />
                            </Accordion.Item>
                            <Accordion.Item eventKey="5" className='accordion-item'>
                                <AccordionItem heading='Is demat account necessary to apply for an IPO in India?' description="Gain insights into the necessity of having a demat account when applying for Initial Public Offerings (IPOs) in India. A demat account is mandatory for holding allotted shares acquired through IPO subscriptions, facilitating seamless participation in the IPO market." />
                            </Accordion.Item>
                        </Accordion>


                    </div>
                </div>
            </div>
        </div>
    )
}


export default Questions