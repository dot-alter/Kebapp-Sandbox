import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    primary: '#222',
    background: '#111',
  },
  space: {
    sm: '8px',
    md: '16px',
  },
});