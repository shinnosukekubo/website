import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./views/pages/Home/Home";
import Blog from "./views/pages/Blog/Blog";
import Post from "./views/pages/Post/Post";
import Career from "./views/pages/Career/Career";
import Header from "./views/components/Header/Header";
import Footer from "./views/components/Footer/Footer";
import Login from "./views/pages/Login/Login";
import AuthUserProvider, { PrivateRoute } from "./modules/Auth";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const SPAContext = createContext();
ReactDOM.render(
  <React.StrictMode>
    <AuthUserProvider>
      <Router>
        <div className="root">
          <Switch>
            <Route path="/post">
              <PrivateRoute>
                <Header />
                <Post />
                <Footer />
              </PrivateRoute>
            </Route>
            <Route path="/login">
              <Header />
              <Login />
              <Footer />
            </Route>
            <Route path="/blog">
              <Header />
              <Blog />
              <Footer />
            </Route>
            <Route path="/career">
              <Header />
              <Career />
              <Footer />
            </Route>
            <Route path="/">
              <Header />
              <Home />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthUserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
