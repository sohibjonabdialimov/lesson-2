import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import Aside from "./components/Aside/Aside";
import Info from "./components/Info/Info";
import { NavContext } from "./context/NavContext";

const Glavniy = () => {
  let {nav} = useContext(NavContext);
  return (
    <>
      <Header />
      <div className={nav && "container"}>
        <div className="main_content">
          <Sidebar />
          <main>
            <Aside />
            <div className={!nav ? "padding" : null}>
              <Info />
              <nav>
                <NavLink to="/">Glavniy</NavLink>
                <NavLink to="video">Video</NavLink>
                <NavLink to="shorts">Shorts</NavLink>
                <NavLink to="playlist">Playlist</NavLink>
                <NavLink to="xabarlar">Xabarlar</NavLink>
                <NavLink to="kanal">Kanallar</NavLink>
                <NavLink to="kanalhaqida">Kanal Haqida</NavLink>
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </nav>
              <div className="main_section">
                <Outlet />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Glavniy;
