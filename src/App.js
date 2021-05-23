import './App.scss';
import React, { useState } from 'react';
import {
  Redirect, Route, BrowserRouter as Router, Switch,
} from 'react-router-dom';
import Header from './components/common/header/Header';
import URLS from './config/urls';
import ArticleDetails from './pages/article-details/ArticleDetails';
import Bookmarks from './pages/bookmarks/Bookmarks';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import AppContext from 'AppContext';
import { SortOrders, StorageKeys } from 'config/shared';

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
      <Router>
        <Header />
        <AppContext.Provider value={{
          sortOrder,
          setSortOrder,
        }}
        >
          <div className="content">
            <Switch>
              <Route path={URLS.HOME}>
                <Home />
              </Route>
              <Route path={URLS.SEARCH}>
                <Search />
              </Route>
              <Route path={`${URLS.ARTICLE}/:articleId`}>
                <ArticleDetails />
              </Route>
              <Route path={URLS.BOOKMARKS}>
                <Bookmarks />
              </Route>
              <Route path="/">
                <Redirect to={URLS.HOME} />
              </Route>
              <Route path="*">
                Page Not Found
              </Route>
            </Switch>
          </div>
        </AppContext.Provider>
      </Router>
    </div>
  );
}

export default App;
