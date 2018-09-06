import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import ExPropsContent from "./ex-props/ExPropsContent";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/props" component={ExPropsContent} />
      <Route component={() => <div>Coming soon ...</div>} />
    </Switch>
  )
};
