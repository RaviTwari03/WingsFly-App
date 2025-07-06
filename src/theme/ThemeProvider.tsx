import * as React from 'react';
import { createContext, useContext, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { colors, Colors } from './colors';

type Theme = {
  colors: Colors;
  isDark: boolean;
  spacing: {
    xs: number;
    s: number;
    m: number;
    l: number;
    xl: number;
    xxl: number;
  };
  borderRadius: {
    s: number;
    m: number;
    l: number;
    xl: number;
    circle: number;
  };
  textVariants: {
    h1: object;
    h2: object;
    h3: object;
    body: object;
    caption: object;
    button: object;
  };
};

const lightTheme: Theme = {
  colors,
  isDark: false,
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 48,
  },
  borderRadius: {
    s: 4,
    m: 8,
    l: 12,
    xl: 16,
    circle: 100,
  },
  textVariants: {
    h1: {
      fontSize: 32,
      fontWeight: 'bold',
      lineHeight: 40,
      color: colors.text.primary,
    },
    h2: {
      fontSize: 24,
      fontWeight: '600',
      lineHeight: 32,
      color: colors.text.primary,
    },
    h3: {
      fontSize: 20,
      fontWeight: '600',
      lineHeight: 28,
      color: colors.text.primary,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: colors.text.primary,
    },
    caption: {
      fontSize: 12,
      lineHeight: 16,
      color: colors.text.secondary,
    },
    button: {
      fontSize: 16,
      fontWeight: '600',
      color: colors.onPrimary,
      textTransform: 'uppercase',
      letterSpacing: 1.25,
    },
  },
};

const darkTheme: Theme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    background: '#121212',
    surface: '#1e1e1e',
    text: {
      primary: 'rgba(255, 255, 255, 0.87)',
      secondary: 'rgba(255, 255, 255, 0.6)',
      disabled: 'rgba(255, 255, 255, 0.38)',
      hint: 'rgba(255, 255, 255, 0.38)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
  },
  isDark: true,
};

const ThemeContext = createContext<Theme>(lightTheme);

interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: 'light' | 'dark' | 'auto';
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme = 'auto',
}) => {
  const systemColorScheme = useColorScheme();
  
  const selectedTheme = theme === 'auto' 
    ? systemColorScheme === 'dark' ? darkTheme : lightTheme
    : theme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={selectedTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): Theme => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return theme;
};

export default ThemeProvider;
