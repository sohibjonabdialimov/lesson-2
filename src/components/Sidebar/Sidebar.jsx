import { useContext } from "react";
import Navbar from "../../UI/Navbar/Navbar";
import "./style.css";
import { NavContext } from "../../context/NavContext";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const { nav } = useContext(NavContext);

  return (
    <>
      {nav ? (
        <section className="sidebar">
          <div className="sidebar_nav">
            <div className="side_main_navbar">
              <NavLink to="/">
                <Navbar
                  img={<ion-icon name="home-outline"></ion-icon>}
                  text="Glavniy"
                />
              </NavLink>
              <NavLink to="/about">
                <Navbar
                  img={<ion-icon name="musical-notes-outline"></ion-icon>}
                  text="Shorts"
                />
              </NavLink>
              <NavLink to="/obunalar">
                <Navbar
                  img={<ion-icon name="grid-outline"></ion-icon>}
                  text="Obunalar"
                />
              </NavLink>
            </div>

            <div className="side_main_navbar">
              <NavLink to="/kutubxona">
                <Navbar
                  img={<ion-icon name="newspaper-outline"></ion-icon>}
                  text="Kutubxona"
                />
              </NavLink>

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
        </section>
      ) : (
        <div className="small_nav">
          <NavLink to="/">
            <div className="small_nav_item">
              <ion-icon name="home-outline"></ion-icon>
              <p>Glavniy</p>
            </div>
          </NavLink>
          <NavLink to="/about">
            <div className="small_nav_item">
              <ion-icon name="musical-notes-outline"></ion-icon>
              <p>Shorts</p>
            </div>
          </NavLink>
          <NavLink to="/obunalar">
            <div className="small_nav_item">
              <ion-icon name="grid-outline"></ion-icon>
              <p>Obunalar</p>
            </div>
          </NavLink>
          <NavLink to="/kutubxona">
            <div className="small_nav_item">
              <ion-icon name="newspaper-outline"></ion-icon>
              <p>Kutubxona</p>
            </div>
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Sidebar;
