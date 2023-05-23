import React, { useContext } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { NavContext } from "../../context/NavContext";
import { TrendingContext } from "../../context/Context";
import "./style.css";

const Hero = () => {
  let { nav } = useContext(NavContext);
  let trending = useContext(TrendingContext);
  // console.log("tr", trending.contents);
  return (
    <>
      <Header />
      <>
        {trending && <div className={nav ? "container" : null}>
            <div className="main_content">
              <Sidebar />
              <main>
                <div className={!nav ? "padding" : null}>
                  {trending.contents.map((item) => {
                    return (
                      <div key={item.video.videoId}>
                        <img src={item.video.thumbnails[2].url} alt="" />
                        <h2>{item.video.channelName}</h2>
                       <span>{item.video.channelName}</span>
                        <div className="hero_desc">
                          <p>{item.video.viewCountText}</p>
                          <p>{item.video.publishedTimeText}</p>
                        </div>
                        <span className="lengthText">{item.video.lengthText}</span>
                      </div>
                    );
                  })}
                </div>
              </main>
            </div>
          </div>
        }
      </>
    </>
  );
};

export default Hero;
