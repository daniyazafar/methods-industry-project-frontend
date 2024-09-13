import React from "react";
import "./Header.scss";
import telus from "../../assets//logo/telus-logo.png";
import brainstation from "../../assets/logo/brainstation-logo.png";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__text">Stream Team</h1>
      <p>
        Every person is different. <br></br> So is every streaming service.{" "}
      </p>
    </header>
  );
};

export default Header;
