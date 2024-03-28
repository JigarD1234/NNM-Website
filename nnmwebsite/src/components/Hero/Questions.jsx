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
                                <AccordionItem heading = 'Accordion Item#1' description = " If you can't find the answer you're seeking within our FAQ section, we encourage you to get in touch with our dedicated support team. Our knowledgeable and friendly representatives are here to assist you with any inquiries or concerns you may have"/>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className='accordion-item'>
                                <AccordionItem heading = 'Accordion Item#2' description = " If you can't find the answer you're seeking within our FAQ section, we encourage you to get in touch with our dedicated support team. Our knowledgeable and friendly representatives are here to assist you with any inquiries or concerns you may have"/>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className='accordion-item'>
                                <AccordionItem heading = 'Accordion Item#3' description = " If you can't find the answer you're seeking within our FAQ section, we encourage you to get in touch with our dedicated support team. Our knowledgeable and friendly representatives are here to assist you with any inquiries or concerns you may have"/>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" className='accordion-item'>
                                <AccordionItem heading = 'Accordion Item#4' description = " If you can't find the answer you're seeking within our FAQ section, we encourage you to get in touch with our dedicated support team. Our knowledgeable and friendly representatives are here to assist you with any inquiries or concerns you may have"/>
                            </Accordion.Item>
                           

                        </Accordion>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Questions