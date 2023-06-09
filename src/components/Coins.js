import React from "react";
import Coin from "../routes/Coin";
import { Link } from "react-router-dom";
import CoinItem from "./Coinitem";
import "./Coins.css";
import Pagination from "@mui/material/Pagination";
import { useContext } from "react";
import CoinContext from "../store/coinstore";
const Coins = (props) => {
  const { incrementpage, page } = useContext(CoinContext);
  const handleChange = (event, value) => {
    incrementpage(value);
  };
  return (
    <div className="container">
      <div>
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Mkt Cap</p>
        </div>
        {props.coins.map((coins) => {
          return (
            <Link
              to={{
                pathname: `/coin/${coins.id}`,
              }}
              element={<Coin />}
              key={coins.id}
            >
              <CoinItem coins={coins} />
            </Link>
          );
        })}
        <div className="mt-2 mb-3 flex justify-center">
          <Pagination
            defaultPage={page}
            count={10}
            variant="outlined"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Coins;
