import { createTheme } from '@mui/material/styles';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4A235A', // Deep Purple
      contrastText: '#fff',
    },
    secondary: {
      main: '#B8A97F', // Muted Gold
      contrastText: '#fff',
    },
    background: {
      default: '#F5F5F5', // Light Grey
      paper: '#FFFFFF', // White
    },
    success: {
      main: '#5CB85C', // Green
    },
    info: {
      main: '#5BC0DE', // Light Blue
    },
    warning: {
      main: '#F0AD4E', // Orange
    },
    error: {
      main: '#D9534F', // Red
    },
    text: {
      primary: '#333333', // Dark Grey
      secondary: '#666666', // Medium Grey
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '-1.5px',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-1px',
    },
    h4: {
      fontWeight: 700,
      letterSpacing: '-1px',
    },
    h5: {
      fontWeight: 600,
      letterSpacing: '-0.5px',
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.5px',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontSize: '1rem',
          boxShadow: '0 4px 12px 0 rgba(0,0,0,0.1)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 8px 32px 0 rgba(0,0,0,0.15)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: 16,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          background: '#4A235A', // Deep Purple
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: '#fff',
          fontWeight: 600,
          fontSize: '1rem',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: 'none',
        },
      },
    },
  },
});

export default theme; 