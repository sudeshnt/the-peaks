import React, { useState } from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeSwitcher } from 'App.styled';
import AppContext from 'AppContext';
import images from 'assets/images';
import Header from 'components/header/Header';
import { SortOrders, StorageKeys } from 'config/shared';
import Router from 'Router';
import GlobalStyles from 'styles/globalStyles';
import { Themes, useTheme } from 'styles/theme/useTheme';

function App() {
  const { theme, themeName, changeTheme } = useTheme();

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

  const onToggleTheme = () => {
    if (themeName === Themes.LIGHT) {
      changeTheme(Themes.DARK);
    } else if (themeName === Themes.DARK) {
      changeTheme(Themes.LIGHT);
    }
  };

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
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
        <ThemeSwitcher onClick={onToggleTheme}>
          <img src={images.themeSwitch} alt="" />
        </ThemeSwitcher>
      </ThemeProvider>
    </div>
  );
}

export default App;
