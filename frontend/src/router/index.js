import React, {lazy, Suspense} from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Loading from "../components/loading"

const Login = lazy(() => import("../pages/auth/login"));
const Home = lazy(() => import("../pages/home"));

function Routes() {
  return (
    <>
      <Suspense fallback={<Loading/>}>
        <Router>
          <Switch>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </>
  )
}

export default Routes;
