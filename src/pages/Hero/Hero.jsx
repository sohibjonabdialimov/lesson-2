import React, { useContext } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { NavContext } from "../../context/NavContext";
import { TrendingContext } from "../../context/Context";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  let { nav } = useContext(NavContext);
  let trending = useContext(TrendingContext);
  let navigate = useNavigate();
  return (
    <>
      <Header />
      <>
        {trending && (
          <div className={nav ? "container" : null}>
            <div className="main_content">
              <Sidebar />
              <main>
                <div className={!nav ? "padding hero_cards" : "hero_cards"}>
                  {trending.contents.map((item) => {
                    return (
                      <Link to={`/videolar/${item.video.videoId}`} key={item.video.videoId} className="hero_card">
                        <div className="hero_div_img">
                          <img
                            className="hero_img"
                            src={item.video.thumbnails[2].url}
                            alt=""
                          />
                          <span className="lengthText">
                            {item.video.lengthText}
                          </span>
                        </div>

                        <div className="hero_title">
                          <Link to="/glavniy/glavniy">
                          <img
                            className="hero_avatar"
                            src={item.video.thumbnails[0].url}
                            alt=""
                          />
                          </Link>
                          
                          <div className="hero_content">
                            <h2>{item.video.title.length > 65 ? item.video.title.slice(0, 65) + "..." : item.video.title}</h2>
                            <span>{item.video.channelName}</span>
                            <div className="hero_desc">
                              <p>{item.video.viewCountText}</p>
                              <p>{item.video.publishedTimeText}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </main>
            </div>
          </div>
        )}
      </>
    </>
  );
};

export default Hero;
