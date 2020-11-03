import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNav from "../components/Topnav/TopNav";
import Dashboard from "../screens/Dashboard";
import AuthScreen from "../screens/AuthScreen";

export default () => {
  return (
    <Router>
      <TopNav />
      <Switch>
        <Route exact path="/">  
          <AuthScreen />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
};
