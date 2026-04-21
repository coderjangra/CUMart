import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#60a5fa', // Softer, breathable Blue
      light: '#93c5fd',
      dark: '#2563eb',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#a78bfa', // Softer Violet
      light: '#c4b5fd',
      dark: '#7c3aed',
      contrastText: '#ffffff',
    },
    background: {
      default: '#0b0f19', // Deep space slate, less harsh than pure black
      paper: 'rgba(19, 27, 47, 0.6)', // Breathable, translucent card background
    },
    success: {
      main: '#34d399',
    },
    error: {
      main: '#f87171',
    },
    warning: {
      main: '#fbbf24',
    },
    info: {
      main: '#38bdf8',
    },
    text: {
      primary: '#f8fafc',
      secondary: '#94a3b8',
    },
    divider: 'rgba(255, 255, 255, 0.08)',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.02em' },
    h2: { fontWeight: 800, letterSpacing: '-0.02em' },
    h3: { fontWeight: 700, letterSpacing: '-0.02em' },
    h4: { fontWeight: 700, letterSpacing: '-0.01em' },
    h5: { fontWeight: 600, letterSpacing: '-0.01em' },
    h6: { fontWeight: 600, letterSpacing: '-0.01em' },
    button: { fontWeight: 600, letterSpacing: '0.02em' },
  },
  shape: {
    borderRadius: 20, // Softer, more rounded corners
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#0b0f19',
          backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(96, 165, 250, 0.05) 0px, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(167, 139, 250, 0.05) 0px, transparent 50%)
          `,
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
          margin: 0,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(19, 27, 47, 0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.5)',
          transition: 'all 0.3s ease-in-out', // Smooth, breathable transition
          '&:hover': {
            background: 'rgba(25, 35, 60, 0.7)',
            boxShadow: '0 15px 50px -10px rgba(0, 0, 0, 0.6), 0 0 20px rgba(96, 165, 250, 0.15)',
            transform: 'translateY(-2px)', // Less aggressive transform to prevent choppiness
            borderColor: 'rgba(255, 255, 255, 0.15)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          background: 'rgba(15, 22, 38, 0.8)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(11, 15, 25, 0.8)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: 'rgba(11, 15, 25, 0.9)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          textTransform: 'none',
          padding: '10px 24px',
          transition: 'all 0.2s ease-in-out', // Smooth transition
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          '&:active': {
            transform: 'scale(0.97)',
          },
        },
        containedPrimary: {
          background: 'rgba(96, 165, 250, 0.2)',
          border: '1px solid rgba(96, 165, 250, 0.4)',
          color: '#93c5fd',
          boxShadow: 'none',
          '&:hover': {
            background: 'rgba(96, 165, 250, 0.3)',
            borderColor: 'rgba(96, 165, 250, 0.6)',
            boxShadow: '0 4px 20px rgba(96, 165, 250, 0.2)',
            transform: 'translateY(-1px)',
          }
        },
        outlined: {
          borderColor: 'rgba(255, 255, 255, 0.15)',
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          '&:hover': {
            borderColor: 'rgba(255, 255, 255, 0.3)',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            transform: 'translateY(-1px)',
          }
        }
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.2s ease-in-out',
          padding: '12px',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            transform: 'scale(1.05)',
          },
          '&:active': {
            transform: 'scale(0.95)',
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'rgba(19, 27, 47, 0.6)',
            borderRadius: '16px',
            transition: 'all 0.2s ease-in-out',
            backdropFilter: 'blur(10px)',
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.1)',
              transition: 'border-color 0.2s ease-in-out',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.2)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#60a5fa',
              borderWidth: '1px',
            },
            '&.Mui-focused': {
              backgroundColor: 'rgba(96, 165, 250, 0.05)',
            }
          },
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: '12px',
          padding: '6px 4px',
        },
        outlined: {
          borderWidth: '1px',
          borderColor: 'rgba(255, 255, 255, 0.15)',
        }
      }
    },
  },
});
