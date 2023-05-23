import React, { memo, useContext } from "react";
import "./style.css";
import { AboutChannelContext } from "../../context/Context";

const KanalHaqida = () => {
  const aboutChannel = useContext(AboutChannelContext);
  // console.log("nima", aboutChannel);
  return (
    <>
      {aboutChannel && (
        <div className="about">
          <div className="welcome">
            <h3>Opisaniya</h3>
            <p>
              {aboutChannel.description.split(".")[0] +
                "." +
                aboutChannel.description.split(".")[1] +
                "."}
            </p>
            <p>
              {aboutChannel.description.split(".")[2] +
                "." +
                aboutChannel.description.split(".")[3] +
                "." +
                aboutChannel.description.split(".")[4] +
                "." +
                aboutChannel.description.split(".")[5] +
                "." +
                aboutChannel.description.split(".")[6] +
                "." +
                aboutChannel.description.split(".")[7] +
                "."}
            </p>
            <p>{aboutChannel.description.split(".")[8] + "."}</p>

            <h3>Дополнительно</h3>
            <div className="about_strana">
              <span>Страна:</span>
              <span>Соединенные Штаты</span>
            </div>
            <h3>Ссылки</h3>
            <div className="about_link">
              <a href="https://www.apple.com/">Apple.com</a>
              <a href="https://www.instagram.com/apple/">Instagram</a>
            </div>
          </div>
          <div className="statistika">
            <h4>Statistika</h4>
            <p>Дата регистрации: {aboutChannel.joinedDateText}</p>
            <p>{aboutChannel.viewCountText} просмотров</p>
            <div className="about_icon">
              <ion-icon name="flag-outline"></ion-icon>
              <ion-icon name="arrow-redo-outline"></ion-icon>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(KanalHaqida);
