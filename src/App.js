import React from "react";
import {Switch, Route, withRouter} from "react-router";
import ChooseSimulation from "./pages/ChooseSimulation";


const App = () => {
  return(
      <Switch>
        <Route path={'/'} component={ChooseSimulation}/>
      </Switch>
  );
};

export default withRouter(App);
