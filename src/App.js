import React from 'react';
import './App.css';
import CreditCard from './CreditCard';
import ErrorName from './MessagesError/ErrorName';

function App() {
  return (
    <div className="App">
      <header>
        <span>&#8249;</span>
        <span>
          Complete your Payment
        </span>
      </header>
      <CreditCard />
      <ErrorName/>
    </div>
  );
}

export default App;
