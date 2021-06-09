import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Header from './components/Header/header';
import store from './redux/store/index';
import Home from './components/Home/home';
import Cart from './components/Cart/cart';
import Login from './components/Login/login';
import AboutUs from './components/AboutUs/aboutUs';
import Products from './components/ProductsList/productList';
import './App.scss';
import Details from './components/Details/details';

function App() {
  return (
    <>
      <Provider store={store()}>
        <Header />
        <BrowserRouter>
          <nav className="navegationBar">
            <Link to="/"> Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/details">Details</Link>
            <Link to="/aboutus">AboutUs</Link>
            <Link to="/login">Login</Link>
            <Link to="/cart">Cart</Link>
          </nav>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/details" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route path="/login" component={Login} />

          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
