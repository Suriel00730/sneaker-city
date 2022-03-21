import React from 'react';
import Header from './components/Header';
import Pages from './components/Pages';
import Carrito from './components/Carrito';
import Details from './components/Details';

import 'boxicons';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataProvider } from './context/Dataprovider';

function App() {


  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Details />
          <Header />
          <Carrito />
          <Pages />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
