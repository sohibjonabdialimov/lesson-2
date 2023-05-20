import React, { useContext } from "react";
import "./style.css";
import {
  AboutChannelContext,
  ChannelContext,
  InfoContext,
  PlaylistContext,
} from "../../context/Context";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const navigate = useNavigate();
  let aboutChannel = useContext(AboutChannelContext);
  let playlist = useContext(PlaylistContext);
  return (
    <>
      {aboutChannel && (
        <div className="channel_info">
          <div className="channel_content">
            <img src={aboutChannel?.avatar?.thumbnails[0]?.url} alt="" />
            <div className="channel_desc">
              <h2>{aboutChannel?.title}</h2>
              <div className="channel_desc_link">
                <p className="channel_bold">
                  {aboutChannel?.vanityChannelUrl?.split(
                    "http://www.youtube.com/"
                  )}
                </p>
                <p>{aboutChannel?.subscriberCountText}</p>
                <p>182 video</p>
              </div>
              <div className="channel_about_commit">
                <p>
                  {aboutChannel?.description?.slice(0, 73)}...
                </p>
                <button onClick={() => navigate("/kanalhaqida")}>
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </button>
              </div>
            </div>
          </div>
          <div className="podpiska_btn">
            <button>Obuna bo'lish</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Info;
