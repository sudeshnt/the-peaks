import Header from './components/common/header/Header';
import './App.scss';
import Article from './components/article/Article';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Bookmarks from './pages/bookmarks/Bookmarks';
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
              <Route path={URLS.ARTICLE}>
                <Article />
              </Route>
              <Route path={URLS.Bookmarks}>
                <Bookmarks />
              </Route>
              <Route path="/">
                <div>Page Not Found</div>
              </Route>
            </Switch>
          </div>
      </Router>
    </div>
  );
}

export default App;
