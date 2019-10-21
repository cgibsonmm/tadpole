import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import NotFound from './sharedComponents/NotFound'

export default function Main() {
  return (
    <>
      {/* Routes */}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  )
}
