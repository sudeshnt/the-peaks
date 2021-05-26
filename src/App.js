import './App.scss';
import React, { useState } from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import Header from './components/common/header/Header';
import AppContext from 'AppContext';
import { SortOrders, StorageKeys } from 'config/shared';
import Router from 'Router';

function App() {
  const [sortOrder, setSortOrder] = useState(() => {
    const order = localStorage.getItem(StorageKeys.SORT_ORDER);
    // eslint-disable-next-line no-unused-vars
    const sortOrderValid = Object.entries(SortOrders).some(([id, { key }]) => key === order);
    if (sortOrderValid) {
      return order;
    }
    localStorage.setItem(StorageKeys.SORT_ORDER, SortOrders.NEWEST_FIRST.key);
    return SortOrders.NEWEST_FIRST.key;
  });

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <AppContext.Provider value={{
          sortOrder,
          setSortOrder,
        }}
        >
          <div className="content">
            <Router />
          </div>
        </AppContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
