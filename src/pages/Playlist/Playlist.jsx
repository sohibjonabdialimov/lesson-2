import React, { useContext } from "react";
import { PlaylistContext } from "../../context/Context";
import { v4 } from "uuid";
import "./style.css";
import { Link } from "react-router-dom";

const Playlist = () => {
  let playlist = useContext(PlaylistContext);
  return (
    <>
      {playlist && (
        <div className="playlist_cards">
          {playlist.contents.map((item) => {
            return (
              <Link to={`/videolar/${item.video.videoId}`} key={v4()} className="playlist_card">
                <img src={item.video.thumbnails[3].url} alt="" />
                <h4>{item.video.title.length > 58
                    ? item.video.title.slice(0, 58) + "..."
                    : item.video.title}</h4>
                <p>Посмотреть весь плейлист</p>
                <span className="lenthText">{item.video.lengthText}</span>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Playlist;
