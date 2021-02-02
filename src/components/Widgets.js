import React, { useEffect, useState } from "react";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "./Widgets.css";
function Widgets() {
  const [news, setNews] = useState("");
  const [bitcoin, setBitcoin] = useState("");
  const [apple, setApple] = useState("");
  useEffect(() => {
    const getNews = async () => {
      await fetch("https://api.covid19api.com/stats")
        .then((res) => res.json())
        .then((data) => {
          setNews(data.Total);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    const getBitcoin = async () => {
      await fetch("https://blockchain.info/ticker")
        .then((res) => res.json())
        .then((data) => {
          setBitcoin(data.USD.last);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    const applStock = async () => {
      await fetch(
        "https://financialmodelingprep.com/api/v3/quote/AAPL?apikey=demo"
      )
        .then((res) => res.json())
        .then((data) => {
          setApple(data[0].price);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    getNews();
    getBitcoin();
    applStock();
  });
  const displayNews = (title, subtitle) => (
    <div className="widgets__news">
      <div className="news__left">
        <FiberManualRecordIcon />
      </div>
      <div className="news__right">
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoOutlinedIcon />
      </div>
      {displayNews(
        "Total COVID cases",
        `${news.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
      )}
      {displayNews("Apple Stock price", `$${apple}`)}
      {displayNews(
        "Bitcoin price",
        `$${bitcoin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
      )}
    </div>
  );
}

export default Widgets;
