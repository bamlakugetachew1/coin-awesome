import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Coin.css";
const Coin = (props) => {
  const params = useParams();
  const [coin, setCoin] = useState({});
  const [news, setNews] = useState([]);
  const url = `https://api.coinstats.app/public/v1/coins/${params.coinId}`;
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoin(res.data.coin);
      })
      .catch((error) => {
        console.log(error);
      });
    getnews();
  }, []);
  function getnews() {
    axios
      .get("https://api.coinstats.app/public/v1/news?skip=0&limit=5")
      .then((res) => {
        setNews(res.data.news);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <div className="coin-container">
        <div className="content">
          <h1>{coin.name}</h1>
        </div>
        <div className="content">
          <div className="rank">
            <span className="rank-btn">Rank # {coin.rank}</span>
          </div>
          <div className="info">
            <div className="coin-heading">
              {coin.icon ? <img src={coin.icon} alt="coin icons" /> : null}
              <p>{coin.name}</p>
              {coin.symbol ? <p>{coin.symbol.toUpperCase()}/USD</p> : null}
            </div>
            <div className="coin-price">
              {coin?.price ? <h1>${coin.price.toLocaleString()}</h1> : null}
            </div>
          </div>
        </div>

        <div className="content">
          <table>
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {coin?.priceChange1h ? (
                    <p>{coin.priceChange1h.toFixed(1)}%</p>
                  ) : null}
                </td>
                <td>
                  {coin?.priceChange1d ? (
                    <p>{coin.priceChange1d.toFixed(1)}%</p>
                  ) : null}
                </td>
                <td>
                  {coin?.priceChange1w ? (
                    <p>{coin.priceChange1w.toFixed(1)}%</p>
                  ) : null}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="content">
          <div className="stats">
            <div className="left">
              <div className="row">
                <h4>website url</h4>
                {coin.websiteUrl ? (
                  <a href={coin.websiteUrl} target="_blank">
                    {coin.websiteUrl}
                  </a>
                ) : null}
              </div>
              <div className="row">
                <h4>twitter url</h4>
                {coin.twitterUrl ? (
                  <a href={coin.twitterUrl} target="_blank">
                    {coin.twitterUrl}
                  </a>
                ) : null}{" "}
              </div>
            </div>
            <div className="right">
              <div className="row">
                <h4>Market Cap</h4>
                {coin.marketCap ? (
                  <p>${coin.marketCap.toLocaleString()}</p>
                ) : null}
              </div>
              <div className="row">
                <h4>Circulating Supply</h4>
                {coin.availableSupply ? <p>{coin.availableSupply}</p> : null}
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="about">
            <h3>Trending crypto news</h3>
            {news &&
              news.map((news) => {
              return  <a href={news.link} className="block mb-1 font-body" key={news.id} target="_blank">
                  {news.title}
                </a>;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
