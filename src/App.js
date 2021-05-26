import {
  BrowserRouter,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeSwitcher } from 'App.styled';
import AppContext from 'AppContext';
import images from 'assets/images';
import Header from 'components/header/Header';
import useSortOrder from 'hooks/useSortOrder';
import Router from 'Router';
import GlobalStyles from 'styles/globalStyles';
import { Themes, useTheme } from 'styles/theme/useTheme';

function App() {
  const { theme, themeName, changeTheme } = useTheme();
  const { sortOrder, setSortOrder } = useSortOrder();

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
