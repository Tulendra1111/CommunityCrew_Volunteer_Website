import React, { useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { FaGithubSquare, FaSignOutAlt, FaUser } from "react-icons/fa";
import { FaBitcoin, FaYoutube } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Logo from "./Logo";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  return (
    <>
        <nav className={show ? "navbar show_navbar" : "navbar"}>
          <div className="logo">
            <Logo size="medium" />
          </div>
        <div className="links">
          <ul>
            <li>
              <Link to={"/"}>HOME</Link>
            </li>
            <li>
              <Link to={"/donate"}>DONATE US</Link>
            </li>
            <li>
              <Link to={"/about"}>ABOUT</Link>
            </li>
            <li>
              <Link to={"/contact"}>CONTACT</Link>
            </li>
          </ul>
          <ul>
            {isAuthenticated ? (
              <>
                <li className="user-info">
                  <FaUser />
                  <span>{user?.name}</span>
                </li>
                <li onClick={handleLogout} className="logout-btn">
                  <FaSignOutAlt />
                </li>
              </>
            ) : (
              <li>
                <Link to={"/login"} className="login-link">
                  LOGIN
                </Link>
              </li>
            )}
            <li>
              <FaBitcoin />
            </li>
            <li>
              <FaYoutube />
            </li>
            <li>
              <FaGithubSquare />
            </li>
            <li>
              <BsInstagram />
            </li>
          </ul>
        </div>
        <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
      </nav>
    </>
  );
};

export default Navbar;
