import React, { useContext } from "react";
import "./style.css";
import { AboutChannelContext, channelContext } from "../../context/Context";
const Kanal = () => {
  let aboutChannel = useContext(AboutChannelContext);
  const channelData = useContext(channelContext);
  // console.log("ddededwaed", channelData);
  return (
    <>
      {channelData && (
        <div className="kanallar">
          <h3>Featured Channels</h3>
          <div className="kanalar_info">
            {channelData.kanallar.map((item) => {
              return (
                <div key={item.id} className="kanal_card">
                  <img src={aboutChannel?.avatar?.thumbnails[0]?.url} alt="" />
                  <h4>{item.country}</h4>
                  <p>{item.obuna}</p>
                  <button>Obuna bo'lish</button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Kanal;
