import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import EachSide from "../../components/EachSide/EachSide";
const EachVideo = () => {
  const { id } = useParams();
  return (
    <>
      <Header />
      <EachSide />
      <div className="each_video">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default EachVideo;
