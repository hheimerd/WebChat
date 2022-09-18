import React from 'react';

export const themes = {
    light: {
        bodyClassName: 'theme-light',
    }, dark: {
        bodyClassName: 'theme-dark',
    },
};

export const ThemeContext = React.createContext({
    styles: themes.light,
    toggleStyle: () => {},
});