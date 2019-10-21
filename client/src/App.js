import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/sharedComponents/Footer';
import './App.css';
import LandingPage from './components/LandingPage'

function App() {
  return (
    <>
      <LandingPage />
    </>
  );
}

export default () => (
  <Router><App /></Router>
)
