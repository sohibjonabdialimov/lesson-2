import { useContext } from "react";
import Navbar from "../../UI/Navbar/Navbar";
import "./style.css";
import { EachContext } from "../../context/NavContext";
import Button from "../../UI/Button/Button";
const EachSide = () => {
  const { each } = useContext(EachContext);

  return (
    <>
      {each && (
        <section className={each ? "each_side clickedSide" : "each_side"}>
          <div className="each_side_nav">
            <div className="each_logo">
              <Button
                type={"each"}
                img={<ion-icon name="menu-outline"></ion-icon>}
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
                alt=""
              />
            </div>
            <div className="side_wrap">
              <div className="each_side_main_navbar">
                <Navbar
                  img={<ion-icon name="home-outline"></ion-icon>}
                  text="Glavniy"
                />
                <Navbar
                  img={<ion-icon name="musical-notes-outline"></ion-icon>}
                  text="Shorts"
                />
                <Navbar
                  img={<ion-icon name="grid-outline"></ion-icon>}
                  text="Obunalar"
                />
              </div>
              <div className="side_main_navbar">
                <Navbar
                  img={<ion-icon name="newspaper-outline"></ion-icon>}
                  text="Kutubxona"
                />
                <Navbar
                  img={<ion-icon name="pencil-outline"></ion-icon>}
                  text="Tarix"
                />
                <Navbar
                  img={<ion-icon name="play-back-circle-outline"></ion-icon>}
                  text="Sizning videoyingiz"
                />
                <Navbar
                  img={<ion-icon name="rocket-outline"></ion-icon>}
                  text="Keyinroq ko'rish"
                />
                <Navbar
                  img={<ion-icon name="videocam-off-outline"></ion-icon>}
                  text="Sizning videoyingiz"
                />
                <Navbar
                  img={<ion-icon name="ribbon-outline"></ion-icon>}
                  text="Pravilno"
                />
              </div>

              <div className="side_main_navbar">
                <h3>Obunalar</h3>
                <Navbar
                  img={<ion-icon name="school-outline"></ion-icon>}
                  text="Musiqa"
                />
                <Navbar
                  img={<ion-icon name="shirt-outline"></ion-icon>}
                  text="Sport"
                />
                <Navbar
                  img={<ion-icon name="stop-circle-outline"></ion-icon>}
                  text="Video o'yinlar"
                />
                <Navbar
                  img={<ion-icon name="today-outline"></ion-icon>}
                  text="Xabarlar"
                />
              </div>

              <div className="side_main_navbar">
                <h3>Navigator</h3>
                <Navbar
                  img={<ion-icon name="thumbs-up-outline"></ion-icon>}
                  text="Trendda"
                />
                <Navbar
                  img={<ion-icon name="caret-back-circle-outline"></ion-icon>}
                  text="Musiqa"
                />
                <Navbar
                  img={<ion-icon name="barcode-outline"></ion-icon>}
                  text="Transliyatsiya"
                />
                <Navbar
                  img={<ion-icon name="tennisball-outline"></ion-icon>}
                  text="Video o'yinlar"
                />
                <Navbar
                  img={<ion-icon name="share-outline"></ion-icon>}
                  text="Xabarlar"
                />
                <Navbar
                  img={<ion-icon name="bicycle-outline"></ion-icon>}
                  text="Sport"
                />
                <Navbar
                  img={<ion-icon name="book-outline"></ion-icon>}
                  text="Ta'lim"
                />
                <Navbar
                  img={<ion-icon name="snow-outline"></ion-icon>}
                  text="Moda i krasota"
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default EachSide;
