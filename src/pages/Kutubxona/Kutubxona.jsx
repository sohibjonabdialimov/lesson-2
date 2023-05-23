import React, { useContext } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { NavContext } from "../../context/NavContext";
import { TrendingContext } from "../../context/Context";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Kutubxona = () => {
  let { nav } = useContext(NavContext);
  let trending = useContext(TrendingContext);
  let navigate = useNavigate();
  const heroNavigate = () => {
    navigate("glavniy");
  }
  return (
    <>
      <Header />
      <>
        {trending && (
          <div className={nav ? "container" : null}>
            <div className="main_content">
              <Sidebar />
              <main>
              <h1>Kutubxona</h1>
              </main>
            </div>
          </div>
        )}
      </>
    </>
  );
};

export default Kutubxona;
