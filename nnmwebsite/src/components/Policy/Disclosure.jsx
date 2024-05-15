import React from 'react'
import PolicyNavigation from './PolicyNavigation'
import PolicyBgHeader from './PolicyBgHeader'
import PolicySecondCol from './PolicySecondCol'

const Disclosure = () => {
  return (
    <>
     <PolicyBgHeader NavigationHeader='disclosure'/>
        <div className='terms'>
            <div className='container'>
                <div className='row terms-row'>
                   <PolicyNavigation/>
                   <PolicySecondCol>
                    <h3>Disclosure</h3>
                    <p>NNMSPL / VCPL besides doing client based business also does its own investment and/or trading.</p>
                    <p>The Stock Exchange, Mumbai is not in any manner answerable, responsible or liable to any person or persons for any acts of omission or commission, errors, mistakes and/or violation, actual or perceived, by us or our partners, agents, associates etc., of any of the Rules, Regulations, Bye-laws of the Stock Exchange, Mumbai, SEBI Act or any other laws in force from time to time.</p>
                    <p>The Stock Exchange, Mumbai is not answerable, responsible or liable for any information on this Website or for any services rendered by our employees, our servants, and us.</p>
                    </PolicySecondCol>  
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Disclosure