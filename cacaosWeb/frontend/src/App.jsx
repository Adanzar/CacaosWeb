import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/Footer/footer';
import store from './redux/store/index';
import Home from './components/Home/home';
import Cart from './components/Cart/cart';
import Login from './components/user/login';
import AboutUs from './components/AboutUs/aboutUs';
import Products from './components/ProductsList/productList';
import './App.scss';
import Details from './components/Details/details';
import AddProduct from './components/admin/createProduct';
import UpdateProduct from './components/admin/updateProduct';

function App() {
  return (
    <>
      <Provider store={store()}>

        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/details/:productId" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route path="/login" component={Login} />
            <Route path="/add-product" component={AddProduct} />
            <Route path="/update-product/:productId" component={UpdateProduct} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
