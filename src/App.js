import Header from './components/common/header/Header';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Bookmarks from './pages/bookmarks/Bookmarks';
import Article from './pages/article/Article';
import URLS from './config/urls';

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
