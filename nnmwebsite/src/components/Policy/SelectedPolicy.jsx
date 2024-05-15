import React from 'react'
import PolicyData from './PolicyData'
import PolicySecondCol from './PolicySecondCol'

const SelectedPolicy = ({ policyTitle, SelectedPolicyData, subheading }) => {
  return (
    <>
      <PolicySecondCol>
        <h3>{policyTitle}</h3>
        {subheading ? (<p>{subheading}</p>) : ''}

        {SelectedPolicyData ? (<>
          <ul>
            {SelectedPolicyData.map((data, index) => {
              return (
                <PolicyData key={index} data={data} />
              )
            })}
          </ul>

        </>) : ''}
        </PolicySecondCol>

      



    </>
  )
}

export default SelectedPolicy