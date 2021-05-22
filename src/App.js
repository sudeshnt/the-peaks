import './App.scss';
import {
  Redirect, Route, BrowserRouter as Router, Switch,
} from 'react-router-dom';
import Header from './components/common/header/Header';
import URLS from './config/urls';
import Article from './pages/article-details/ArticleDetails';
import Bookmarks from './pages/bookmarks/Bookmarks';
import Home from './pages/home/Home';
import Search from './pages/search/Search';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="content">
          <Switch>
            <Route path={URLS.HOME}>
              <Home />
            </Route>
            <Route path={URLS.SEARCH}>
              <Search />
            </Route>
            <Route path={`${URLS.ARTICLE}/:articleId`}>
              <Article />
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
      </Router>
    </div>
  );
}

export default App;
