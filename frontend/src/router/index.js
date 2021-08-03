import React, {lazy} from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

const Login = lazy(() => import("../pages/auth/login"));

function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            Hello
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default Routes;
