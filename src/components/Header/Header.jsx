import { useContext } from "react";
import "./style.css";
import Button from "../../UI/Button/Button";
import { NavContext } from "../../context/NavContext";

const Header = () => {
  const {setNav} = useContext(NavContext);
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header_content">
            <div className="logo">
              <Button setNav={setNav} img={<ion-icon name="menu-outline"></ion-icon>} />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
                alt=""
              />
            </div>
            <div className="search">
              <div className="search_input">
                <input type="text" placeholder="Search" />
                <div className="search_wrap">
                  <ion-icon name="search-outline"></ion-icon>
                </div>
              </div>
              <Button img={<ion-icon name="mic-outline"></ion-icon>} />
            </div>
            <div className="user">
              <Button img={<ion-icon name="videocam-outline"></ion-icon>} />
              <Button img={<ion-icon name="briefcase-outline"></ion-icon>} />
              <Button img={<ion-icon name="person-add-outline"></ion-icon>} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
