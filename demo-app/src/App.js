import React from 'react';
import Header from './components/Header';
import Pages from './components/Pages';
import Carrito from './components/Carrito';
import Detalles from './components/Detalles';

import 'boxicons';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { DataProvider } from './context/Dataprovider';


function App() {

  // const Data = [
  //   { name: "Suriel", date: new Date('2022-03-23') },
  //   { name: "Ismeiri", date: new Date('2021-05-16') },
  //   { name: "Nadia", date: new Date('2022-02-07') },
  //   { name: "No se", date: new Date('1998-04-31') },
  //   { name: "Dime tu", date: new Date('2022-04-31') },
  //   { name: "Que te importa", date: new Date('2013-04-31') },
  //   { name: "Ni a mi", date: new Date('2017-04-31') },
  // ]

  // const orderedData = Data.slice().sort((a, b) => b.date - a.date);

  // for (let i = 0; i < 5; i++) {
  //   console.log(orderedData[i].name, "---- " + orderedData[i].date);
  // }


  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Detalles />
          <Header />
          <Carrito />
          <Pages />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
