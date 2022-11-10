import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavigationContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="nav-wrapper">
        <div className="left-side">
          <div className="nav-link-wrapper">
            <NavLink
              
              to="/"
              className={(navData) =>
                navData.isActive ? "nav-link-active" : ""
              }
            >
              Home
            </NavLink>
            {/* <NavLink exact to="/" activeClassName="nav-link-active">
              Home
            </NavLink> */}
          </div>

          <div className="nav-link-wrapper">
            <NavLink
              to="/about-me"
              className={(navData) =>
                navData.isActive ? "nav-link-active" : ""
              }
            >
              About
            </NavLink>
            {/* <NavLink to="/about-me" activeClassName="nav-link-active">
              About
            </NavLink> */}
          </div>

          <div className="nav-link-wrapper">
            <NavLink
              to="/contact"
              className={(navData) =>
                navData.isActive ? "nav-link-active" : ""
              }
            >
              Contact
            </NavLink>

            {/* <NavLink to="/contact" activeClassName="nav-link-active">
                            Contact
                        </NavLink> */}
          </div>

          <div className="nav-link-wrapper">
            <NavLink
              to="/blog"
              className={(navData) =>
                navData.isActive ? "nav-link-active" : ""
              }
            >
              Home
            </NavLink>

            {/* <NavLink to="/blog" activeClassName="nav-link-active">
              Blog
            </NavLink> */}
          </div>
          {false ? <button>Add Blog</button> : null}
        </div>

        <div className="right-side">MIGUEL ISLAS</div>
      </div>
    );
  }
}

export default NavigationContainer;
