import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MainLayout from './componets/Layout/main';
import HomePage from './pages/Home';
import ProductPage from './pages/Product';
export default () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/products/:id">
          <ProductPage />
        </Route>
      </Switch>
    </MainLayout>
  </Router>
);
