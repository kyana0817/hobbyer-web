import { createTheme } from '@mui/material';

export default createTheme({
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: '700'
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: '700'
    },
    h3: {
      fontSize: '1.17rem',
      fontWeight: '700'
    },
    h4: {
      fontSize: '1rem',
      fontWeight: '700'
    },
    h5: {
      fontSize: '.83rem',
      fontWeight: '700'
    },
    h6: {
      fontSize: '.67rem',
      fontWeight: '700'
    },
    caption: {
      color: 'rgba(0, 0, 0, 0.5)'
    }
  },
  palette: {
    text: {
      primary: 'rgba(0, 0, 0, 0.8)'
    },
    primary: {
      main: '#00C6AD'
    },
    secondary: {
      main: '#7fd1ae'
    },
    background: {
      default: '#eff2f4'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        button: {
          cursor: 'pointer',
        }
      }
    },
    MuiAppBar: {
      variants: [
        {
          props: {variant: 'main.header'},
          style: {
            background: '#eff2f4',
            borderBottom: `solid #e7ebf0`,
            borderBottomWidth: 'thin',
            paddingLeft: '80px',
            paddingRight: '80px',
            color: 'rgba(0, 0, 0, 0.8)'
          },
        }
      ]
    }
  }
});