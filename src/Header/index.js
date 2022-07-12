import React, { useEffect, useState } from "react";

import "./styles.css";

export const baseUrl =
  "http://api.exchangeratesapi.io/v1/latest?access_key=cfc07eb69b9bab8ba87eacec8b7c495d";

export const Header = () => {
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((jsonData) => setCurrency([jsonData.rates]));
  }, []);

  return (
    <div className="header">
      <img
        alt="icon"
        style={{ width: "8%" }}
        src="https://www.rackspace.com/sites/default/files/rxt_partner_logos/Microsoft-Exchange.png"
      />
      <div className="header__container">
        <div className="header__container__wrapper">
          {currency.map((curr) => (
            <div className="header__container__wrapper__currency" key={curr}>
              <p className="header__container__wrapper__currency-option">
                UAH : {curr.UAH}
              </p>
              =
              <p className="header__container__wrapper__currency-option">
                USD : {curr.USD}
              </p>
            </div>
          ))}
        </div>
        <div className="header__wrapper">
          {currency.map((curr) => (
            <div className="header__container__wrapper__currency" key={curr}>
              <p className="header__container__wrapper__currency-option">
                UAH : {curr.UAH}
              </p>
              =
              <p className="header__container__wrapper__currency-option">
                EUR : {curr.EUR}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
