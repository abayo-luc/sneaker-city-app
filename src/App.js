import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import MainLayout from './componets/Layout/main';
import HomePage from './pages/Home';
import ProductPage from './pages/Product';
import ShoppingCart from './pages/ShoppingCart';
export const SearchContext = React.createContext('');

export default () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <Router>
      <SearchContext.Provider value={searchQuery}>
        <MainLayout onSearchQueryChange={(value) => setSearchQuery(value)}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/products/:id">
              <ProductPage />
            </Route>
            <Route exact path="/carts">
              <ShoppingCart />
            </Route>
          </Switch>
        </MainLayout>
      </SearchContext.Provider>
    </Router>
  );
};
