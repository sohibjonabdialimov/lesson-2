import React, { memo, useContext } from "react";
import { TrendingContext } from "../../context/Context";
import { v4 } from "uuid";
import "./style.css";
import { Link } from "react-router-dom";

const Asosiy = () => {
  let trending = useContext(TrendingContext);
  return (
    <>
      {trending && (
        <div className="asosiy_cards">
          {trending.contents.map((item) => {
            return (
              <Link to={`/videolar/${item.video.videoId}`} key={v4()} className="asosiy_card">
                <img src={item.video.thumbnails[2].url} alt="" />
                <h4>
                  {item.video.title.length > 48
                    ? item.video.title.slice(0, 48) + "..."
                    : item.video.title}
                </h4>
                <div className="apple_logo">
                  <p>Apple</p>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </div>
                <p>{item.video.viewCountText}</p>
                <p>{item.video.publishedTimeText}</p>
                <span className="lenthText">{item.video.lengthText}</span>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default memo(Asosiy);
