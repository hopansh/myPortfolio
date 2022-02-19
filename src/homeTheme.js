import { createTheme } from '@mui/material/styles';

export const homeTheme = createTheme({
  palette: {
    primary: {
      main: '#FF0000', // This is an orange looking color
    },
    secondary: {
      main: '#232532',
      light: '#2A2D3C',
    },
    background: {
      default: '#17161b',
      paper: '#0e0e10',
    },
    text: {
      hint: '#4B79C6',
      secondary: '#FEBF32',
      primary: '#FF0000',
    },
    gradient: {
      gradient1: 'linear-gradient(45deg, #FF0000 30%, #FF8E53 90%)',
      gradient2: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    },
  },
  typography: {
    h1: {
      color: '#FF0000',
      fontFamily: 'Raleway',
      fontWeight: 700,
    },
    h3: {
      color: '#FF0000',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
  },

  components: {
    MuiAlert: {
      variants: [
        {
          props: { severity: 'success' },
          style: {
            color: 'white',
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            fontSize: '1.2rem',
            '& .MuiAlert-icon': {
              color: 'white',
            },
            '& .MuiAlert-action': {
              color: 'white',
            },
          },
        },
        {
          props: { severity: 'error' },
          style: {
            color: 'red',
            fontSize: '1.2rem',
            '& .MuiAlert-icon': {
              color: 'red',
            },
            '& .MuiAlert-action': {
              color: 'red',
            },
          },
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'custom' },
          style: {
            color: 'white',
            textTransform: 'none',
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            '&:hover': {
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            },
          },
        },
      ],
    },

    MuiTypography: {
      variants: [
        {
          props: { variant: 'whiteH1' },
          style: {
            color: '#fff',
            fontFamily: 'Raleway',
            fontSize: '6rem',
            fontWeight: 700,
          },
        },
      ],
    },
    MuiDivider: {
      defaultProps: {
        color: '#FF0000',
      },
    },
    MuiIcon: {
      defaultProps: {
        color: '#FF0000',
      },
    },
  },
});
