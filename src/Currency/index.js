import React from 'react';
import './styles.css'

export const Currency = (props) => {
    const {
        currency, 
        selectedCurrency, 
        onChangeCurrency, 
        sum, 
        onChangeSum
    } = props;

    return (
        <div className='currency'>
            <input className='currency__input' type="number" value={sum} onChange={onChangeSum}/>
            <select className='currency__select' value={selectedCurrency} onChange={onChangeCurrency}>
                {currency.map(item =>
                    <option className='currency__select-option' key={item} value={item}>{item}</option>
                )}
            </select>
        </div>
    );
};
