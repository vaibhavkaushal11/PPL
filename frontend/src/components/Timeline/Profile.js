import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Timeline from "./Timeline";
import UserProfile from "./UserProfile";
import history from "../../History/History";

function Profile() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/timeline" component={Timeline}></Route>
          <Route path="/timeline/:number" component={UserProfile}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Profile;
