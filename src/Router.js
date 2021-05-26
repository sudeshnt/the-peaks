import { Redirect, Route, Switch } from 'react-router-dom';
import URLS from 'config/urls';
import ArticleDetailsPage from 'pages/article-details/ArticleDetailsPage';
import BookmarksPage from 'pages/bookmarks/BookmarksPage';
import HomePage from 'pages/home/HomePage';
import SearchPage from 'pages/search/SearchPage';

const Router = () => (
  <Switch>
    <Route path={URLS.HOME}>
      <HomePage />
    </Route>
    <Route path={URLS.SEARCH}>
      <SearchPage />
    </Route>
    <Route path={`${URLS.ARTICLE}/:articleId`}>
      <ArticleDetailsPage />
    </Route>
    <Route path={URLS.BOOKMARKS}>
      <BookmarksPage />
    </Route>
    <Route path="/">
      <Redirect to={URLS.HOME} />
    </Route>
    <Route path="*">
      Page Not Found
    </Route>
  </Switch>
);

export default Router;
