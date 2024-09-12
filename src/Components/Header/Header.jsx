import React from "react";
import "./Header.scss";
import telus from "../../assets//logo/telus-logo.png";
import brainstation from "../../assets/logo/brainstation-logo.png";

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={telus} alt="Telus Logo" />
      <h1 className="header__text">Flix Chooser</h1>
      <img
        className="header__logo"
        src={brainstation}
        alt="BrainStation Logo"
      />
    </header>
  );
};

export default Header;
