import React from "react";
import PropTypes from "prop-types";
import "./Header.css";
import { NavBar } from "../NavBar/NavBar";
import { Logo } from "./Logo/Logo";

export const Header = props => {
  return (
    <header>
      <div className="top-bar container">
        <Logo />
      </div>
      <NavBar />
    </header>
  );
};

Header.defaultProps = {
  title: "Book Store"
};
Header.propTypes = {
  title: PropTypes.string
};
