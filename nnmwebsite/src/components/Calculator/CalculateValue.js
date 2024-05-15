export function CalculateValues(quantityInput , priceInput , brokerageInput , minimumInput , exchangeInput ,calculateTable){
    const turnover = quantityInput*priceInput;
    const brokerageRate = brokerageInput*1;
    let brokerage = Number(((brokerageRate/100)*turnover).toFixed(2))
    let maxBrokerage = brokerage;
    let secondBrokerage = Number((quantityInput*minimumInput))
    let ipft = exchangeInput === 'NSE' ? Number(((0.00325/100)*turnover).toFixed(2)) : 0
    let clgfees = Number(((0.00325/100)*turnover).toFixed(2))

    if(secondBrokerage>brokerage){
        maxBrokerage = secondBrokerage
    }
    let STTtotal = 0;
    let stampDuty = 0;
    // let transactioncharges = exchangeInput === 'NSE' ? (0.006 / 100) * turnover : (0.00275 / 100) * turnover
    let transactioncharges= (0.00375/100)*turnover
    if(calculateTable ===1 ){
        stampDuty = Number(((0.015/100)*turnover).toFixed(2))
        STTtotal = Number(((0.1 / 100) * turnover).toFixed(2))
    }
    else if(calculateTable === 2){
        stampDuty = Number(((0.003/100)*turnover).toFixed(2))
        STTtotal = Number(((0.025 / 100) * turnover).toFixed(2))
    }
    else if(calculateTable === 3){
        transactioncharges = exchangeInput === 'NSE' ? (0.002 / 100) * turnover:0
        STTtotal = Number(((0.01 / 100) * turnover).toFixed(2))
        ipft = exchangeInput === 'NSE' ? Number(((0.001/100)*turnover).toFixed(2)) : 0
        stampDuty = Number(((0.002/100)*turnover).toFixed(2))
        clgfees = Number(((0.0051/100)*turnover).toFixed(2))
        

    }
    const sebiFees = Number(((0.00015 / 100) * turnover).toFixed(2))
    const transCharge = Number(transactioncharges.toFixed(2))
    const gst = Number( ((18/100)*(brokerage + sebiFees + transCharge)).toFixed(2));
    const totalCharges = (brokerage+STTtotal+stampDuty+sebiFees+ipft+clgfees+transCharge+gst).toFixed(2)
    
    return {
        turnover,
        brokerageRate,
        maxBrokerage,
        STTtotal,
        stampDuty,
        sebiFees,
        ipft,
        clgfees,
        transCharge,
        gst,
        totalCharges,
        calculateTable
    };
}