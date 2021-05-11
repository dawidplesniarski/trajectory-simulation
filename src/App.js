import React from "react";
import {Switch, Route, withRouter} from "react-router";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

const App = () => {
  return(
      <Switch>
        <Route exact path={'/'} component={LoginPage}/>
        <Route exact path={'/main'} component={MainPage}/>
      </Switch>
  );
};

export default withRouter(App);
