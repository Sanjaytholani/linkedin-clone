import React, { useEffect, useState } from "react";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "./Widgets.css";
function Widgets() {
  const [news, setNews] = useState([]);
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
    getNews();
  });
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoOutlinedIcon />
      </div>
      <div className="widgets__news">
        <div className="news__left">
          <FiberManualRecordIcon />
        </div>
        <div className="news__right">
          <p>
            Total COVID cases{" "}
            <span>{news.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Widgets;
