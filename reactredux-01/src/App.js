import React from 'react';
import './App.css';
import ListProduct from './components/ListProduct';
import DetailProduct from './components/DetailProduct';

function App() {
  return (
    <div>
      <ListProduct/>
      <hr/>
      <DetailProduct/>
    </div>
  );
}

export default App;
