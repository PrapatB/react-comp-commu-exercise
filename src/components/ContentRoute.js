import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import ExPropsContent from "./ex-props/ExPropsContent";
import ExIntanceMethodsContent from "./ex-instance-methods/ExIntanceMethodsContent";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/props" component={ExPropsContent} />
      <Route path="/instance_methods" component={ExIntanceMethodsContent} />
      <Route component={() => <div>Coming soon ...</div>} />
    </Switch>
  )
};
