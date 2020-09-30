import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Home from './components/Home/Home';
import ProductDetail from './components/ProductDetail/ProductDetail';
import { Provider } from 'react-redux';
import store from './js/store/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import CustomHeader from './components/CustomHeader/CustomHeader';

render(
  <Provider store={store}>
    <CustomHeader />
    <Router>
      <Switch>
        <Route path="/" exact component={Home}>
          <Redirect to="/product" />
        </Route>
        <Route exact path="/product" component={Home} />
        <Route path="/product/:id" component={ProductDetail} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);