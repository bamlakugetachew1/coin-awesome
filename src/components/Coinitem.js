import React from "react";
import "./Coins.css";
const CoinItem = (props) => {
  return (
    <div className="coin-row">
      <p>{props.coins.rank}</p>
      <div className="img-symbol">
        <img src={props.coins.icon} alt="coin icons" />
        <p>{props.coins.symbol.toUpperCase()}</p>
      </div>
      <p>${props.coins.price.toLocaleString()}</p>
      <p>{props.coins.priceChange1d.toFixed(2)}%</p>
      <p className="hide-mobile">
        ${props.coins.volume.toLocaleString()}
      </p>
      <p className="hide-mobile">${props.coins.marketCap.toLocaleString()}</p>
    </div>
  );
};

export default CoinItem;
