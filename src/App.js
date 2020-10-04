import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MainLayout from './componets/Layout/main';
import HomePage from './pages/Home';
export default () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </MainLayout>
  </Router>
);
