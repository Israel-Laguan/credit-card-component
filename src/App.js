import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import CreditCard from './CreditCard';
import ErrorName from './MessagesError/ErrorName';
import ErrorNumber from './MessagesError/ErrorNumber';
import ErrorCode from './MessagesError/ErrorCode';
import ErrorDate from './MessagesError/ErrorDate';
import Completed from './MessagesCard/Completed';
import Incompleted from './MessagesCard/Incompleted';

function App() {
  return (
    <div className="App">
      <header>
        <span>
          <Link to='/'>&#8249;</Link>
        </span>
        <span>
          Complete your Payment
        </span>
      </header>
      <CreditCard />
        <ErrorName/>
        <ErrorNumber/>
        <ErrorCode/>
        <ErrorDate/>
        <Completed/>
        <Incompleted/>
    </div>
  );
}

export default App;
