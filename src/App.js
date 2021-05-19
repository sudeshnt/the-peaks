import Header from './components/common/header/Header';
import './App.scss';
import Article from './components/article/Article';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Bookmarks from './pages/bookmarks/Bookmarks';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/article">
              <Article />
            </Route>
            <Route path="/bookmarks">
              <Bookmarks />
            </Route>
            <Route path="/">
              <div>Page Not Found</div>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
