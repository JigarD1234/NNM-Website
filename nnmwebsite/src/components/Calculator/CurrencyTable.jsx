import React, { useState } from 'react'
import { CalculateValues } from './CalculateValue'
import Table from './Table'

const CurrencyTable = () => {
    const tableFifth = 5

    const [inputCurrency , setInputCurrency] = useState({
      quantity:'',
      rate:'',
      brokerageRate:'',
      minimum:'',
      exchange:''
    })

    function handleDeliveryChange(e){
      const {name , value} = e.target
      setInputCurrency({
        ...inputCurrency,
        [name]:value

      })

    }
    

    // const [inputs, setInputs] = useState({
    //     delivery: {
    //         quantity: '',
    //         price: '',
    //         brokerage: '',
    //         minimum: '',
    //         exchange: 'NSE'
    //     },
    //     intraday:{
    //         quantity: '',
    //         price: '',
    //         brokerage: '',
    //         minimum: '',
    //         exchange: 'NSE'
    //     },
    //     future:{
    //         quantity:'',
    //         price:'',
    //         brokerage:'',
    //         minimum:'',
    //         exchange:'NSE'
    //     },
    //     options:{
    //         quantity:'',
    //         lotSize:'',
    //         brokePerLot:''
    //     }

    // })

    // const handleDeliveryChange = (e) => {
    //     const { name, value } = e.target
    //     setInputs({
    //         ...inputs,
    //         delivery:{
    //             ...inputs.delivery,
    //             [name]:value
    //         }
    //     })


    // }
   
    // const calculatedValuesFirst = CalculateValues(inputs.delivery.quantity, inputs.delivery.price, inputs.delivery.brokerage, inputs.delivery.minimum, inputs.delivery.exchange , tableFirst );

    const calculatedValuesFifth = CalculateValues(inputCurrency.quantity, inputCurrency.rate, inputCurrency.brokerageRate, 
      inputCurrency.minimum,inputCurrency.exchange, tableFifth )
    


    return (
        <>
            <div className='equity-table border'>
                <div className='row'>
                    <div className='col-lg-12 equity-delivery '>
                        <h3 className='equity-heading'>CD - NSE/BSE</h3>
                        <ul className='equity-inputs'>
                            <li>
                                QUANTITY
                                <br />
                                <input
                                    type='number'
                                    id='quantity-input'
                                    value={inputCurrency.quantity}
                                    name='quantity'
                                    onChange={handleDeliveryChange} />
                            </li>
                            <li>
                                RATE
                                <br />
                                <input
                                    type='number'
                                    id='price-input'
                                    value={inputCurrency.rate}
                                    name='rate'
                                    onChange={handleDeliveryChange} />
                            </li>
                            <li>
                                BROKERAGE RATE
                                <br />
                                <input
                                    type='number'
                                    id='brokerage-input'
                                    value={inputCurrency.brokerageRate}
                                    name='brokerageRate'
                                    onChange={handleDeliveryChange} />
                            </li>
                            <li>
                                MIN BROKERAGE
                                <br />
                                <input
                                    type='number'
                                    id='minimum-input'
                                    value={inputCurrency.minimum}
                                    name='minimum'
                                    onChange={handleDeliveryChange} />
                            </li>
                            <li>
                                EXCHANGE
                                <br />
                                <select
                                    id='exchange-input'
                                    name='exchange'
                                    value={inputCurrency.exchange}
                                    onChange={handleDeliveryChange} >
                                    <option value='NSE'>NSE</option>
                                    <option value='BSE'>BSE</option>
                                </select>
                            </li>
                        </ul>
                        <Table values={calculatedValuesFifth} />
                    </div>
                    
                  

                </div>
            </div>
        </>
    )
}

export default CurrencyTable