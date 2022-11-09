import "../style/main.scss";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import PortfolioDetail from "./portfolio/portfolio-detail";
import Auth from "./pages/auth";
import NoMatch from "./pages/no-match";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <NavigationContainer />

            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="/auth" element={<Auth/>} />
              <Route path="/about-me" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/blog" element={<Blog/>} />
              <Route exact path="/portfolio/:slug" element={<PortfolioDetail/>} />
              <Route path= "/:slug" element={<NoMatch/>} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}