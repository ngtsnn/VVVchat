import React, {lazy, Suspense} from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Loading from "../components/loading";

import AppRoute from "../layouts";

import MainLayout from "../layouts/main";

const Login = lazy(() => import("../pages/auth/login"));
const Home = lazy(() => import("../pages/home"));
const Chatbox = lazy(() => import("../pages/chatbox"));

function Routes() {
  return (
    <>
      <Suspense fallback={<Loading/>}>
        <Router>
          <Switch>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <AppRoute Layout={MainLayout} Page={Chatbox} exact path="/messages"></AppRoute>
            <AppRoute Layout={MainLayout} Page={Home}></AppRoute>
          </Switch>
        </Router>
      </Suspense>
    </>
  )
}

export default Routes;
