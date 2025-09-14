import React from 'react';
import './App.css';
import ProductList from './components/productList';

function App() {
  return (
   <div className="App">
      <header className="App-header">
        <span className="welcome">Welcome</span>
        <span className="to">To</span>
        <span className="nextech">NexTech!</span>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
}

export default App;
