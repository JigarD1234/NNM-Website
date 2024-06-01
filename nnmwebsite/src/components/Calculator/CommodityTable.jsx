import React, { useState } from 'react'
import { CalculateValues } from './CalculateValue'
import Table from './Table'

const CommodityTable = () => {
    const tableFirst = 1;
    const tableSecond = 2;
    const tableThird = 3;
    const tableFourth = 4;

    const [inputs, setInputs] = useState({
        delivery: {
            quantity: '',
            price: '',
            brokerage: '',
            minimum: '',
            exchange: 'NSE'
        },
        intraday:{
            quantity: '',
            price: '',
            brokerage: '',
            minimum: '',
            exchange: 'NSE'
        },
        future:{
            quantity:'',
            price:'',
            brokerage:'',
            minimum:'',
            exchange:'NSE'
        },
        options:{
            quantity:'',
            lotSize:'',
            brokePerLot:''
        }

    })

    const handleDeliveryChange = (e) => {
        const { name, value } = e.target
        setInputs({
            ...inputs,
            delivery:{
                ...inputs.delivery,
                [name]:value
            }
        })


    }
    const handleIntradayChange = (e)=>{
        const {name , value} = e.target
        setInputs({
            ...inputs,
            intraday:{
                ...inputs.intraday,
                [name]:value
            }
        })
    }
    const handleFutureChange = (e)=>{
        const{name , value} = e.target
        setInputs({
            ...inputs,
            future:{
                ...inputs.future,
                [name]:value
            }

        })
    }
    const calculatedValuesFirst = CalculateValues(inputs.delivery.quantity, inputs.delivery.price, inputs.delivery.brokerage, inputs.delivery.minimum, inputs.delivery.exchange , tableFirst );
    const calculatedValuesSecond = CalculateValues(inputs.intraday.quantity,inputs.intraday.price,inputs.intraday.brokerage,inputs.intraday.minimum,inputs.intraday.exchange,tableSecond)
    const calculatedValuesThird = CalculateValues(inputs.future.quantity,inputs.future.price,inputs.future.brokerage,inputs.future.minimum,inputs.future.exchange,tableThird)


    return (
        <>
            <div className='equity-table border'>
                <div className='row'>
                    <div className='col-lg-12 equity-delivery '>
                        <h3 className='equity-heading'>Equity-Delivery</h3>
                        <ul className='equity-inputs'>
                            <li>
                                QUANTITY
                                <br />
                                <input
                                    type='number'
                                    id='quantity-input'
                                    value={inputs.delivery.quantity}
                                    name='quantity'
                                    onChange={handleDeliveryChange} />
                            </li>
                            <li>
                                PRICE
                                <br />
                                <input
                                    type='number'
                                    id='price-input'
                                    value={inputs.delivery.price}
                                    name='price'
                                    onChange={handleDeliveryChange} />
                            </li>
                            <li>
                                BROKERAGE RATE
                                <br />
                                <input
                                    type='number'
                                    id='brokerage-input'
                                    value={inputs.delivery.brokerage}
                                    name='brokerage'
                                    onChange={handleDeliveryChange} />
                            </li>
                            <li>
                                MIN BROKERAGE
                                <br />
                                <input
                                    type='number'
                                    id='minimum-input'
                                    value={inputs.delivery.minimum}
                                    name='minimum'
                                    onChange={handleDeliveryChange} />
                            </li>
                            <li>
                                EXCHANGE
                                <br />
                                <select
                                    id='exchange-input'
                                    name='exchange'
                                    value={inputs.delivery.exchange}
                                    onChange={handleDeliveryChange} >
                                    <option value='NSE'>NSE</option>
                                    <option value='BSE'>BSE</option>
                                </select>
                            </li>
                        </ul>
                        <Table values={calculatedValuesFirst} />
                    </div>
                    
                  

                </div>
            </div>
        </>
    )
}

export default CommodityTable