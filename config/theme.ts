import { ThemeOptions, createTheme, responsiveFontSizes } from '@mui/material';

const baseTheme: ThemeOptions = {
  typography: {
    fontFamily: `'Titillium Web', sans-serif`,
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#ebaa02',
    },
    background: {
      paper: '#050a2b',
      default: '#050a2b',
    },
    text: {
      primary: '#ebaa02',
      secondary: '#976f08',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'body1' && { color: '#976f08' }),
        }),
      },
    },
  },
};

export const getTheme = () => {
  const theme = createTheme(baseTheme);
  return responsiveFontSizes(theme);
};
