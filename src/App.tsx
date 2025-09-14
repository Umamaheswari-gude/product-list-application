import React from 'react';
import './App.css';
import ProductList from './components/productList';

function App() {
  return (
   <div className="App">
      <header className="App-header">
        <h1>Welcome to My Product list application!</h1>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
}

export default App;
