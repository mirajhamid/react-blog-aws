import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/HomePage.js";
import PageNotFound404 from "./pages/PageNotFound404.js";
import AboutPage from "./pages/AboutPage.js";
import ArticleListPage from "./pages/ArticleListPage.js";
import ArticlePage from "./pages/ArticlePage.js";

import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div id="page-body">
            <Routes>
              <Route path="/" element={<HomePage />} exact />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/article-list" element={<ArticleListPage />} />
              <Route
                path="/article-list/article/:path"
                element={<ArticlePage />}
              />
              <Route path="/*" element={<PageNotFound404 />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
