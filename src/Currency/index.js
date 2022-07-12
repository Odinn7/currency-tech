import React from 'react';

export const Currency = (props) => {
    const {
        currency, 
        selectedCurrency, 
        onChangeCurrency, 
        sum, 
        onChangeSum
    } = props;

    return (
        <div>
            <input type="number" value={sum} onChange={onChangeSum}/>
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {currency.map(item =>
                    <option key={item} value={item}>{item}</option>
                )}
            </select>
        </div>
    );
};
