import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home.page';
import Products from './pages/Products.page';
import ProductDetail from './pages/ProductDetail.page';
import Cart from './pages/Cart.page';
import NotFound from './pages/NotFound.page'
import CheckoutForm from './pages/CheckoutForm.page';
import CheckoutSummary from './pages/CheckoutSummary.page';
import About from './pages/About.page';
import './doc.css';
import './kim.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/product/:productId" component={ProductDetail} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/checkout" component={CheckoutForm} />
      <Route exact path="/checkout/summary" component={CheckoutSummary} />
      <Route exact path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;