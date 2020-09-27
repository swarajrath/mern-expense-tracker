import React from 'react';
import './App.css';
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { Expences } from './components/Expences'
import { TransactionList } from './components/TransactionList'
import { AddTransactiono } from './components/AddTransactiono'

import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Expences />
        <TransactionList />
        <AddTransactiono />
      </div>
    </GlobalProvider>
  );
}

export default App;
