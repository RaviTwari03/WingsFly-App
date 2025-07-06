interface Colors {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  secondary: string;
  secondaryLight: string;
  secondaryDark: string;
  background: string;
  surface: string;
  error: string;
  onPrimary: string;
  onSecondary: string;
  onBackground: string;
  onSurface: string;
  onError: string;
  text: {
    primary: string;
    secondary: string;
    disabled: string;
    hint: string;
  };
  divider: string;
  shadow: string;
  success: string;
  warning: string;
  info: string;
}

const colors: Colors = {
  primary: '#6200ee',
  primaryLight: '#9e47ff',
  primaryDark: '#0400ba',
  secondary: '#03dac6',
  secondaryLight: '#66fff9',
  secondaryDark: '#00a895',
  background: '#f5f5f5',
  surface: '#ffffff',
  error: '#b00020',
  onPrimary: '#ffffff',
  onSecondary: '#000000',
  onBackground: '#000000',
  onSurface: '#000000',
  onError: '#ffffff',
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.6)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  shadow: 'rgba(0, 0, 0, 0.12)',
  success: '#4CAF50',
  warning: '#FF9800',
  info: '#2196F3',
};

export type { Colors };
export { colors };
export default colors;
