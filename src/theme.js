import { createTheme } from '@mui/material/styles';

export const getTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: {
      main: mode === 'dark' ? '#60a5fa' : '#000000', 
      light: mode === 'dark' ? '#93c5fd' : '#333333',
      dark: mode === 'dark' ? '#2563eb' : '#000000',
      contrastText: mode === 'dark' ? '#ffffff' : '#ffffff',
    },
    secondary: {
      main: mode === 'dark' ? '#a78bfa' : '#f5f5f7',
      light: mode === 'dark' ? '#c4b5fd' : '#ffffff',
      dark: mode === 'dark' ? '#7c3aed' : '#e2e8f0',
      contrastText: mode === 'dark' ? '#ffffff' : '#0f172a',
    },
    background: {
      default: mode === 'dark' ? '#0b0f19' : '#fafafa',
      paper: mode === 'dark' ? 'rgba(19, 27, 47, 0.6)' : 'rgba(255, 255, 255, 0.85)',
    },
    text: {
      primary: mode === 'dark' ? '#f8fafc' : '#09090b',
      secondary: mode === 'dark' ? '#94a3b8' : '#71717a',
    },
    divider: mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
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
    body1: { fontSize: '1rem', lineHeight: 1.6 },
    body2: { fontSize: '0.875rem', lineHeight: 1.57 },
    button: { fontWeight: 600, textTransform: 'none', letterSpacing: '-0.01em' },
  },
  shape: {
    borderRadius: 24,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: mode === 'dark' ? '#0b0f19' : '#fafafa',
          backgroundImage: mode === 'dark' ? `
            radial-gradient(circle at 10% 20%, rgba(96, 165, 250, 0.05) 0px, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(167, 139, 250, 0.05) 0px, transparent 50%)
          ` : `
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
          background: mode === 'dark' ? 'rgba(19, 27, 47, 0.6)' : '#ffffff',
          borderRadius: '24px',
          border: `1px solid ${mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)'}`,
          boxShadow: mode === 'dark' ? '0 10px 40px -10px rgba(0, 0, 0, 0.5)' : '0 4px 20px -4px rgba(0, 0, 0, 0.05), 0 2px 8px -2px rgba(0, 0, 0, 0.02)',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          overflow: 'hidden',
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: mode === 'dark' ? '0 15px 50px -10px rgba(0, 0, 0, 0.6), 0 0 20px rgba(96, 165, 250, 0.15)' : '0 20px 40px -8px rgba(0, 0, 0, 0.1), 0 10px 16px -4px rgba(0, 0, 0, 0.04)',
            border: `1px solid ${mode === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.08)'}`,
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
          background: mode === 'dark' ? 'rgba(11, 15, 25, 0.8)' : 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          borderBottom: `1px solid ${mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}`,
          boxShadow: mode === 'dark' ? '0 4px 30px rgba(0, 0, 0, 0.3)' : '0 1px 2px rgba(0,0,0,0.02)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: mode === 'dark' ? 'rgba(11, 15, 25, 0.9)' : 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(40px) saturate(200%)',
          WebkitBackdropFilter: 'blur(40px) saturate(200%)',
          borderLeft: `1px solid ${mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`,
          boxShadow: mode === 'dark' ? '-10px 0 40px rgba(0,0,0,0.5)' : '-10px 0 40px rgba(0,0,0,0.05)',
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
          background: mode === 'dark' ? 'rgba(96, 165, 250, 0.2)' : '#09090b',
          color: mode === 'dark' ? '#93c5fd' : '#ffffff',
          boxShadow: mode === 'dark' ? 'none' : '0 4px 12px rgba(0,0,0,0.1)',
          border: mode === 'dark' ? '1px solid rgba(96, 165, 250, 0.4)' : 'none',
          '&:hover': {
            background: mode === 'dark' ? 'rgba(96, 165, 250, 0.3)' : '#27272a',
            borderColor: mode === 'dark' ? 'rgba(96, 165, 250, 0.6)' : 'none',
            boxShadow: mode === 'dark' ? '0 4px 20px rgba(96, 165, 250, 0.2)' : '0 6px 16px rgba(0,0,0,0.15)',
            transform: 'translateY(-1px)',
          }
        },
        outlined: {
          borderColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)',
          color: mode === 'dark' ? '#f8fafc' : '#09090b',
          backgroundColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.02)' : '#ffffff',
          '&:hover': {
            borderColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)',
            backgroundColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.06)' : '#f4f4f5',
          }
        }
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.2s ease',
          padding: '12px',
          color: mode === 'dark' ? '#f8fafc' : '#3f3f46',
          '&:hover': {
            backgroundColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.04)',
            color: mode === 'dark' ? '#ffffff' : '#09090b',
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
            backgroundColor: mode === 'dark' ? 'rgba(19, 27, 47, 0.6)' : '#ffffff',
            borderRadius: '16px',
            transition: 'all 0.2s ease',
            boxShadow: mode === 'dark' ? 'none' : '0 1px 2px rgba(0,0,0,0.02)',
            '& fieldset': {
              borderColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
              borderWidth: '1px',
              transition: 'all 0.2s ease',
            },
            '&:hover fieldset': {
              borderColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
            },
            '&.Mui-focused fieldset': {
              borderColor: mode === 'dark' ? '#60a5fa' : '#09090b',
              borderWidth: '2px',
            },
            '&.Mui-focused': {
              backgroundColor: mode === 'dark' ? 'rgba(96, 165, 250, 0.05)' : 'transparent',
              boxShadow: mode === 'dark' ? 'none' : '0 4px 12px rgba(0,0,0,0.05)',
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
          backgroundColor: mode === 'dark' ? '#ffffff' : '#09090b',
          color: mode === 'dark' ? '#000000' : '#ffffff',
          '&:hover': {
            backgroundColor: mode === 'dark' ? '#e2e8f0' : '#27272a',
          }
        },
        outlined: {
          borderWidth: '1px',
          borderColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)',
          backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.05)' : '#ffffff',
          '&:hover': {
            backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.1)' : '#f4f4f5',
            borderColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)',
          }
        }
      }
    },
  },
});
