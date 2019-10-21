import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/sharedComponents/Nav';
import Main from './components/Main'
import Footer from './components/sharedComponents/Footer';
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default () => (
  <Router><App /></Router>
)
