import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import MainPage form './MainPage';
import NotFound from './sharedComponents/NotFound'
import Nav from './components/sharedComponents/Nav';

export default function Main() {
  return (
    <>
      {/* Routes */}
      <Nav />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/main" component={MainPage} />
      </Switch>
      <Footer />
    </>
  )
}
