import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/index';
import Home from './components/home/home';
import './App.css';

function App() {
  return (
    <Provider store={store()}>
      <>
        <Home />
        <h1>H1</h1>
        {' '}

      </>
    </Provider>
  );
}

export default App;
