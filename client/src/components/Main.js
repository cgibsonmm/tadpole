import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import MainPage from './MainPage';
import NotFound from './sharedComponents/NotFound'
import Nav from './sharedComponents/Nav';
import Footer from './sharedComponents/Footer';

export default function Main() {
  return (
    <>
      {/* Routes */}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/main" component={MainPage} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  )
}
