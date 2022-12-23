import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import CreditCard from './CreditCard';
import ErrorName from './MessagesError/ErrorName';
import ErrorNumber from './MessagesError/ErrorNumber';
import ErrorCode from './MessagesError/ErrorCode';
import ErrorDate from './MessagesError/ErrorDate';
import Completed from './MessagesCard/Completed';
import Incompleted from './MessagesCard/Incompleted';

function App() {

  const Back = useNavigate()

  function BackShoppingCar(){
    Back('/')
  }

  return (
    <div className="App">
      <header>
        <span onClick={BackShoppingCar}>&#8249;</span>
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
