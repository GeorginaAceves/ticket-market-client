import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";


const Navbar = (props) => {
  return (
    <nav>
      <Link to={PATHS.HOMEPAGE} className="nav__projectName">
        Ticket Market
      </Link>

      <div className="nav__authLinks">
        {props.user ? (
          <>
            <Link to={"/alltickets"} className="authLink">
              All tickets
            </Link>
            <Link to={"/newticket"} className="authLink">
              New ticket
            </Link>
            <Link to={PATHS.PROFILEPAGE} className="authLink">
              User - {props.user?.username}
            </Link>
            <Link to={"/messages"} className="authLink">
              Messages
            </Link>
            <button className="nav-logoutbtn" onClick={props.handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to={PATHS.SIGNUPPAGE} className="authLink">
              Signup
            </Link>
            <Link to={PATHS.LOGINPAGE} className="authLink">
              Log In
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
