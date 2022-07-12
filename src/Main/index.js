import React, {useEffect, useState} from 'react';
import {Currency} from "../Currency";

import './index.css'

export const baseUrl = "http://api.exchangeratesapi.io/v1/latest?access_key=cfc07eb69b9bab8ba87eacec8b7c495d"

export const Main = () => {
    const [currency, setCurrency] = useState([])
    const [fromCurrency, setFromCurrency] = useState()
    const [toCurrency, setToCurrency] = useState()
    const [exchange, setExchange] = useState()
    const [sum, setSum] = useState(1)
    const [sumFromCurrency, setSumFromCurrency] = useState(true)

    let toSum, fromSum
    if (sumFromCurrency) {
        fromSum = sum
        toSum = sum * exchange
    } else {
        toSum = sum
        fromSum = sum / exchange
    }


    useEffect(() => {
        fetch(baseUrl)
            .then(response => response.json())
            .then(jsonData => {
                const firstCurrency = Object.keys(jsonData.rates)[0]
                setCurrency([jsonData.base, ...Object.keys(jsonData.rates)])
                setFromCurrency(jsonData.base)
                setToCurrency(firstCurrency)
                setExchange(jsonData.rates[firstCurrency])
            })
            .catch(error => console.warn(error.reason, "Error"))
    }, [])

    useEffect(() => {
        if (fromCurrency != null && toCurrency != null) {
            fetch(`${baseUrl}&base=${fromCurrency}&symbols=${toCurrency}`)
                .then(res => res.json())
                .then(data => setExchange(data.rates[toCurrency]))
                .catch(error => console.error(error.reason, "ERROR"))
        }
    }, [fromCurrency, toCurrency])

    const handleFromSumChange = (event) => {
        setSum(event.target.value)
        setSumFromCurrency(true)
    }
    const handleToSumChange = (event) => {
        setSum(event.target.value)
        setSumFromCurrency(false)
    }

    return (
        <div className="main">
            <Currency
                currency={currency}
                selectedCurrency={fromCurrency}
                onChangeCurrency={event => setFromCurrency(event.target.value)}
                onChangeSum={handleFromSumChange}
                sum={fromSum}
            />
            =
            <Currency
                currency={currency}
                selectedCurrency={toCurrency}
                onChangeCurrency={event => setToCurrency(event.target.value)}
                onChangeSum={handleToSumChange}
                sum={toSum}
            />
        </div>
    );
};
