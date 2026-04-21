import { createTheme } from '@mui/material/styles';

export const getTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: {
      main: mode === 'dark' ? '#ffffff' : '#000000', 
      light: mode === 'dark' ? '#f4f4f5' : '#3f3f46',
      dark: mode === 'dark' ? '#d4d4d8' : '#000000',
      contrastText: mode === 'dark' ? '#000000' : '#ffffff',
    },
    secondary: {
      main: mode === 'dark' ? '#27272a' : '#f4f4f5',
      contrastText: mode === 'dark' ? '#ffffff' : '#000000',
    },
    background: {
      default: mode === 'dark' ? '#000000' : '#fcfcfc', // OLED Black for dark mode
      paper: mode === 'dark' ? 'rgba(15, 15, 15, 0.6)' : 'rgba(255, 255, 255, 0.7)', // Glassmorphic base
    },
    text: {
      primary: mode === 'dark' ? '#ffffff' : '#09090b',
      secondary: mode === 'dark' ? '#a1a1aa' : '#71717a',
    },
    divider: mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)',
  },
  typography: {
    fontFamily: '"Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", sans-serif',
    h1: { fontWeight: 700, letterSpacing: '-0.04em' },
    h2: { fontWeight: 700, letterSpacing: '-0.03em' },
    h3: { fontWeight: 700, letterSpacing: '-0.03em', fontSize: '2.5rem' },
    h4: { fontWeight: 600, letterSpacing: '-0.02em', fontSize: '1.75rem' },
    h5: { fontWeight: 600, letterSpacing: '-0.01em', fontSize: '1.25rem' },
    h6: { fontWeight: 600, letterSpacing: '-0.01em', fontSize: '1.1rem' },
    subtitle1: { fontWeight: 500, fontSize: '1rem' },
    body1: { fontSize: '1rem', lineHeight: 1.6 },
    body2: { fontSize: '0.875rem', lineHeight: 1.6 },
    button: { fontWeight: 600, textTransform: 'none', letterSpacing: '-0.01em' },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: mode === 'dark' ? '#000000' : '#fcfcfc',
          backgroundImage: mode === 'dark' 
            ? 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.03) 0%, transparent 70%)'
            : 'radial-gradient(circle at 50% 0%, rgba(0,0,0,0.02) 0%, transparent 70%)',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
          margin: 0,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '24px',
          paddingRight: '24px',
          '@media (min-width: 600px)': {
            paddingLeft: '48px',
            paddingRight: '48px',
          },
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: mode === 'dark' ? 'rgba(15, 15, 15, 0.7)' : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(24px) saturate(150%)',
          WebkitBackdropFilter: 'blur(24px) saturate(150%)',
          borderRadius: '24px',
          border: `1px solid ${mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)'}`,
          boxShadow: mode === 'dark' ? '0 20px 40px -10px rgba(0,0,0,0.8)' : '0 10px 30px -10px rgba(0,0,0,0.05)',
          transition: 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
          overflow: 'hidden',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: mode === 'dark' ? '0 30px 60px -15px rgba(0,0,0,1)' : '0 20px 40px -15px rgba(0,0,0,0.1)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: mode === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(252, 252, 252, 0.8)',
          backdropFilter: 'blur(24px) saturate(150%)',
          WebkitBackdropFilter: 'blur(24px) saturate(150%)',
          borderBottom: `1px solid ${mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)'}`,
          boxShadow: 'none',
          paddingTop: '8px',
          paddingBottom: '8px',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: mode === 'dark' ? 'rgba(10, 10, 10, 0.85)' : 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(40px) saturate(200%)',
          WebkitBackdropFilter: 'blur(40px) saturate(200%)',
          borderLeft: `1px solid ${mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'}`,
          boxShadow: mode === 'dark' ? '-20px 0 60px rgba(0,0,0,0.8)' : '-20px 0 60px rgba(0,0,0,0.05)',
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          textTransform: 'none',
          padding: '12px 24px',
          fontSize: '0.95rem',
          fontWeight: 600,
          transition: 'all 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)',
        },
        containedPrimary: {
          background: mode === 'dark' ? '#ffffff' : '#000000',
          color: mode === 'dark' ? '#000000' : '#ffffff',
          boxShadow: mode === 'dark' ? '0 4px 14px rgba(255,255,255,0.1)' : '0 4px 14px rgba(0,0,0,0.1)',
          '&:hover': {
            background: mode === 'dark' ? '#e4e4e7' : '#27272a',
            transform: 'translateY(-1px)',
            boxShadow: mode === 'dark' ? '0 6px 20px rgba(255,255,255,0.15)' : '0 6px 20px rgba(0,0,0,0.15)',
          },
          '&:active': {
            transform: 'scale(0.98)',
          }
        },
        outlined: {
          borderColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
          color: mode === 'dark' ? '#ffffff' : '#000000',
          '&:hover': {
            backgroundColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
            borderColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)',
          }
        }
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.2s ease',
          color: mode === 'dark' ? '#a1a1aa' : '#52525b',
          '&:hover': {
            backgroundColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
            color: mode === 'dark' ? '#ffffff' : '#000000',
          },
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
            borderRadius: '14px',
            transition: 'all 0.2s ease',
            '& fieldset': {
              borderColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
              borderWidth: '1px',
            },
            '&:hover fieldset': {
              borderColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
            },
            '&.Mui-focused fieldset': {
              borderColor: mode === 'dark' ? '#ffffff' : '#000000',
              borderWidth: '2px',
            },
          },
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: '10px',
          padding: '6px 8px',
          fontSize: '0.85rem',
        },
        filled: {
          backgroundColor: mode === 'dark' ? '#ffffff' : '#000000',
          color: mode === 'dark' ? '#000000' : '#ffffff',
          '&:hover': {
            backgroundColor: mode === 'dark' ? '#e4e4e7' : '#27272a',
          }
        },
        outlined: {
          borderWidth: '1px',
          borderColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.15)',
          backgroundColor: 'transparent',
          color: mode === 'dark' ? '#a1a1aa' : '#52525b',
          '&:hover': {
            backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
            color: mode === 'dark' ? '#ffffff' : '#000000',
          }
        }
      }
    },
  },
});
