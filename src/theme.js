import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000', // Jet Black for premium feel
      light: '#333333',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f5f5f7', // Slate 50
      light: '#ffffff',
      dark: '#e2e8f0', // Slate 200
      contrastText: '#0f172a',
    },
    background: {
      default: '#fafafa', // Very light, warm gray (almost white)
      paper: 'rgba(255, 255, 255, 0.85)', // Frosted glass white
    },
    text: {
      primary: '#09090b', // Zinc 950
      secondary: '#71717a', // Zinc 500
    },
    divider: 'rgba(0, 0, 0, 0.08)',
  },
  typography: {
    fontFamily: '"Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.04em' },
    h2: { fontWeight: 700, letterSpacing: '-0.03em' },
    h3: { fontWeight: 700, letterSpacing: '-0.02em', fontSize: '2.5rem' },
    h4: { fontWeight: 600, letterSpacing: '-0.02em' },
    h5: { fontWeight: 600, letterSpacing: '-0.01em' },
    h6: { fontWeight: 600, letterSpacing: '-0.01em' },
    subtitle1: { fontWeight: 500, letterSpacing: '-0.01em' },
    body1: { fontSize: '1rem', lineHeight: 1.6, color: '#3f3f46' },
    body2: { fontSize: '0.875rem', lineHeight: 1.57, color: '#71717a' },
    button: { fontWeight: 600, textTransform: 'none', letterSpacing: '-0.01em' },
    caption: { letterSpacing: '0.04em', textTransform: 'uppercase', fontWeight: 700, fontSize: '0.75rem' }
  },
  shape: {
    borderRadius: 24, // Luxurious, soft rounding
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#fafafa',
          // A very subtle, beautiful ambient background
          backgroundImage: `
            radial-gradient(circle at 15% 50%, rgba(0, 0, 0, 0.02) 0%, transparent 50%),
            radial-gradient(circle at 85% 30%, rgba(0, 0, 0, 0.02) 0%, transparent 50%)
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
          background: '#ffffff',
          borderRadius: '24px',
          border: '1px solid rgba(0, 0, 0, 0.04)',
          boxShadow: '0 4px 20px -4px rgba(0, 0, 0, 0.05), 0 2px 8px -2px rgba(0, 0, 0, 0.02)',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)', // Apple-like smooth spring
          overflow: 'hidden',
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: '0 20px 40px -8px rgba(0, 0, 0, 0.1), 0 10px 16px -4px rgba(0, 0, 0, 0.04)',
            border: '1px solid rgba(0, 0, 0, 0.08)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
          boxShadow: '0 1px 2px rgba(0,0,0,0.02)',
          color: '#09090b',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(40px) saturate(200%)',
          WebkitBackdropFilter: 'blur(40px) saturate(200%)',
          borderLeft: '1px solid rgba(0, 0, 0, 0.08)',
          boxShadow: '-10px 0 40px rgba(0,0,0,0.05)',
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
          transition: 'all 0.2s ease',
          '&:active': {
            transform: 'scale(0.96)',
          },
        },
        containedPrimary: {
          background: '#09090b',
          color: '#ffffff',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          '&:hover': {
            background: '#27272a',
            boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
            transform: 'translateY(-1px)',
          }
        },
        containedSecondary: {
          background: '#f4f4f5',
          color: '#09090b',
          boxShadow: 'none',
          border: '1px solid rgba(0,0,0,0.05)',
          '&:hover': {
            background: '#e4e4e7',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          }
        },
        outlined: {
          borderColor: 'rgba(0, 0, 0, 0.1)',
          color: '#09090b',
          backgroundColor: '#ffffff',
          '&:hover': {
            borderColor: 'rgba(0, 0, 0, 0.2)',
            backgroundColor: '#f4f4f5',
          }
        }
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.2s ease',
          padding: '12px',
          color: '#3f3f46',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
            color: '#09090b',
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
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            transition: 'all 0.2s ease',
            boxShadow: '0 1px 2px rgba(0,0,0,0.02)',
            '& fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.1)',
              borderWidth: '1px',
              transition: 'all 0.2s ease',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.2)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#09090b',
              borderWidth: '2px',
            },
            '&.Mui-focused': {
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            }
          },
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: '10px',
          padding: '4px',
          fontSize: '0.85rem',
        },
        filled: {
          backgroundColor: '#09090b',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#27272a',
          }
        },
        outlined: {
          borderWidth: '1px',
          borderColor: 'rgba(0, 0, 0, 0.1)',
          backgroundColor: '#ffffff',
          '&:hover': {
            backgroundColor: '#f4f4f5',
            borderColor: 'rgba(0, 0, 0, 0.2)',
          }
        }
      }
    },
  },
});
