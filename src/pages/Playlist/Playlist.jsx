import React, { useContext } from "react";
import { PlaylistContext } from "../../context/Context";
import { v4 } from "uuid";
import "./style.css";

const Playlist = () => {
  let playlist = useContext(PlaylistContext);
  return (
    <>
      {playlist && (
        <div className="playlist_cards">
          {playlist.contents.map((item) => {
            return (
              <div key={v4()} className="playlist_card">
                <img src={item.video.thumbnails[3].url} alt="" />
                <h4>{item.video.title.length > 58
                    ? item.video.title.slice(0, 58) + "..."
                    : item.video.title}</h4>
                <p>Посмотреть весь плейлист</p>
                <span className="lenthText">{item.video.lengthText}</span>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Playlist;
