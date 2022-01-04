import React from "react";
import { Link } from "react-router-dom";
import "./header.component.styles.scss";
import { ReactComponent as Logo } from "../assets/crown.svg";
const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <link></link>
    </div>
  </div>
);