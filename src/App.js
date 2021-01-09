import React from "react";
import {Switch, Route, withRouter} from "react-router";
import ChooseSimulation from "./pages/ChooseSimulation";
import SimulationPage from "./pages/SimulationPage";


const App = () => {
  return(
      <Switch>
        <Route exact path={'/'} component={ChooseSimulation}/>
        <Route exact path={'/simulation'} component={SimulationPage}/>
      </Switch>
  );
};

export default withRouter(App);
