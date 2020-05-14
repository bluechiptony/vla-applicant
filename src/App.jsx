import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login, SetPassword, ForgotPassword, SignUp } from "./components/Authentication/Authentication";
import { Dashboard } from "./components/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/activate-account/:code" component={SetPassword} />
          <Route path="/reset-password/:code" component={SetPassword} />
          <Route path="/home" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
