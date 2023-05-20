import React, { memo, useContext } from "react";
import { TrendingContext } from "../../context/Context";
import { v4 } from "uuid";
import "./style.css";

const Asosiy = () => {
  let trending = useContext(TrendingContext);
  return (
    <>
      {trending && (
        <div className="asosiy_cards">
          {trending.contents.map((item) => {
            return (
              <div key={v4()} className="asosiy_card">
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
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default memo(Asosiy);
