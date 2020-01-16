import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavBar'
import { Provider } from 'react-redux';
import ShoppingList from './components/ShoppingList';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <AppNavbar/>
        <ShoppingList/>
      </div>
      </Provider>
    );
  }
}

export default App;
