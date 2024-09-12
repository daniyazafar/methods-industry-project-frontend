import React from "react";
import "./Header.scss";
import telus from "../../assets//logo/telus-logo.png";
import brainstation from "../../assets/logo/brainstation-logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__title">
        <img className="header__logo" src={telus} alt="Telus Logo" />
        <h1 className="header__text">Stream Team</h1>
        <img
          className="header__logo"
          src={brainstation}
          alt="BrainStation Logo"
        />
      </div>
      <p>Every person is different. So is every streaming service. </p>
    </header>
  );
};

export default Header;
