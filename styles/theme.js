import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
        main: '#902424',
        light: '#902424',
        dark: '#902424'
    },
    secondary: {
        main: '#181f73'
    },
    background: {
        default: '#ffffff',
        paper: '#902424'
    }
  },
});

export default theme;
