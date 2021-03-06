import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserContext from "../utils/UserContext";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";

import Nav from "../components/Nav";
import Search from "./Search";
import Library from "./Library"

function Application() {
  const user = useContext(UserContext);

  return (
        user ?
        <Router>
          <Nav/>
        <Switch>
          <Route exact path="/">
                <ProfilePage />
          </Route>
          <Route exact path="/search">
                <Search />
          </Route>
          <Route exact path="/library">
                <Library />
          </Route>
        </Switch>
      </Router>
      :
      <Router>
        <Switch>
          <Route exact path="/signUp">
            <SignUp />
          </Route>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route exact path="/passwordReset">
            <PasswordReset />
          </Route>
        </Switch>
      </Router>
  );
}



export default Application;