import React, {lazy,Suspense} from 'react';
import { Router, Route, Switch, Redirect } from "react-router-dom";
const Home = lazy(() => import('../components/Home'))
const Test = lazy(() => import('../components/Test'))


function AppRouter ({history}) {
  return (
    <Suspense fallback={<div></div>} >
      <Switch>
        <Route path="/Home" component={Home}/>
        <Route path="/test/test" component={Test}/>
        <Redirect to="/home" />
      </Switch>
    </Suspense>
    )
}
export default AppRouter
