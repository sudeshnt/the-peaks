import { useEffect, useState } from 'react';
import themes from './themes';
import { StorageKeys } from 'config/shared';

export const Themes = Object.freeze({
  LIGHT: 'light',
  DARK: 'dark',
});
const DEFAULT_THEME_NAME = Themes.LIGHT;

export const useTheme = () => {
  const [theme, setTheme] = useState(themes[DEFAULT_THEME_NAME]);
  const [themeName, setThemeName] = useState(DEFAULT_THEME_NAME);

  const changeTheme = (name) => {
    const themeKey = themes[name] ? name : DEFAULT_THEME_NAME;
    setTheme(themes[themeKey]);
    setThemeName(themeKey);
    localStorage.setItem(StorageKeys.THEME, themeKey);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem(StorageKeys.THEME);
    changeTheme(savedTheme);
  }, []);

  return { theme, themeName, changeTheme };
};
