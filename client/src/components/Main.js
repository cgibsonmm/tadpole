import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import MainPage from './MainPage';
import createTemplate from './createTemplate';
import Favorites from './Favorites'
import NotFound from './sharedComponents/NotFound'
import Footer from './sharedComponents/Footer';
import TopTemplates from './TopTemplates';

export default function Main() {
  return (
    <>
      {/* Routes */}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/main" component={MainPage} />
        <Route exact path="/createtemplate" component={createTemplate} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/toptemplates" component={TopTemplates} />
      </Switch>
    </>
  )
}
