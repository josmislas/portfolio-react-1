import "../style/main.scss";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import NavigationContainer from "./navigation/navigation-container";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import PortfolioDetail from "./portfolio/portfolio-detail";
import Auth from "./pages/auth";
import NoMatch from "./pages/no-match";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
    };
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
  }
  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    });
  }

  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }

  handleSuccessfulLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }

  checkLoginStatus() {
    return axios
      .get("https://api.devcamp.space/logged_in", { withCredentials: true })
      .then((response) => {
        const loggedIn = response.data.logged_in;
        const loggedInStatus = this.state.loggedInStatus;
        if (loggedIn && loggedInStatus === "LOGGED_IN") {
          return loggedIn;
        } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({ loggedInStatus: "LOGGED_IN" });
        } else if (!loggedIn && loggedInStatus === "LOGGIN_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
          });
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }
  componentDidMount() {
    this.checkLoginStatus();
  }

  autorizedPages() {
    return [<Route path="/blog" element={<Blog />} />];
  }

  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <NavigationContainer 
            loggedInStatus={this.state.loggedInStatus}
            handleSuccessfulLogout={this.handleSuccessfulLogout} />
            <h2>{this.state.loggedInStatus}</h2>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route
                path="/auth"
                element={
                  <Auth
                    handleSuccessfulLogin={this.handleSuccessfulLogin}
                    handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                  />
                }
              />
              <Route path="/about-me" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {this.state.loggedInStatus === "LOGGED_ IN"
                ? this.autorizedPages()
                : null}
              <Route
                exact
                path="/portfolio/:slug"
                element={<PortfolioDetail />}
              />
              <Route path="/:slug" element={<NoMatch />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}
