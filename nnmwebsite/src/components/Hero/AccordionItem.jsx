import React from 'react';
import Accordion from 'react-bootstrap/Accordion';



const AccordionItem = ({heading , description}) => {
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