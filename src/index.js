import React from "react";
import ReactDOM from "react-dom";
import Blog from "./Blog";
import HeaderNews from "./components/HeaderNews";
import Login from "./Login";
import Profile from "./Profile";
import BlogByCategory from "./BlogByCategory";
// import ClickCategory from "./ClickCategory";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "unistore/react";
import { store } from "./Store";
import * as serviceWorker from "./serviceWorker";

// Untuk membuat bisa pindah antar halaman
const routing = (
  <Router>
    <HeaderNews />
    <Switch>
      {/* harus pakai exact path biar tidak ikut terender saat halaman lain dipanggil */}
      <Route exact path="/" component={Blog} />
      <Route path="/signin" component={Login} />
      <Route path="/profile" component={Profile} />
      <Route path="/source/:category" component={BlogByCategory} />
    </Switch>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>{routing}</Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
