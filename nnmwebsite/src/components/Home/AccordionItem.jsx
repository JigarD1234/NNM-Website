import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const AccordionItem = ({ heading, description }) => {
    const x = 23;
    return (
        <>
            <Accordion.Header>{heading}</Accordion.Header>
            <Accordion.Body className='accordion-body'>
                {description}
            </Accordion.Body>
        </>
    )
}


export default AccordionItem