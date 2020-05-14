import React from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import { Login, SetPassword, ForgotPassword, SignUp } from "./components/Authentication/Authentication";
import { Dashboard } from "./components/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/forgot-password" exact component={ForgotPassword} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/activate-account/:code" exact component={SetPassword} />
        <Route path="/reset-password/:code" exact component={SetPassword} />
        <Route path="/home" exact component={Dashboard} />
      </BrowserRouter>
    </div>
  );
}

export default App;
