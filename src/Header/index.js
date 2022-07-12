import React, {useEffect, useState} from 'react';

import './index.css'

export const baseUrl = "http://api.exchangeratesapi.io/v1/latest?access_key=cfc07eb69b9bab8ba87eacec8b7c495d"


export const Header = () => {
    const [currency, setCurrency] = useState([])

    useEffect(() => {
        fetch(baseUrl)
            .then(response => response.json())
            .then(jsonData => setCurrency([jsonData.rates]))
    }, [])

    return (
        <div className="header">
            <ul>
                <li>
                    {currency.map(curr =>
                        <div key={curr}>
                            UAH : {curr.UAH} = USD : {curr.USD}
                        </div>
                    )}
                </li>
                <li>
                    {currency.map(curr =>
                        <div key={curr}>
                            UAH : {curr.UAH} = EUR : {curr.EUR}
                        </div>
                    )}
                </li>
            </ul>
        </div>
    );
};

