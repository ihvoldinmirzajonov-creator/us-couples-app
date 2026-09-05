/**
 * Us App Theme
 * Premium, warm, intimate, elegant, modern, and minimal design system
 */

export const colors = {
  // Primary colors
  cream: '#FFF8F3',
  deepBrown: '#3D2817',
  coral: '#E8967D',
  terracotta: '#D97760',

  // Secondary colors
  lightBeige: '#F5EDE5',
  softGray: '#E8E3DE',
  darkGray: '#4A4A4A',

  // Functional colors
  white: '#FFFFFF',
  black: '#000000',
  success: '#4CAF50',
  error: '#E53935',
  warning: '#FFA726',
  info: '#2196F3',

  // Semantic
  text: {
    primary: '#3D2817',
    secondary: '#7A6B65',
    light: '#A89A92',
    inverse: '#FFFFFF',
  },
  background: {
    primary: '#FFF8F3',
    secondary: '#FAF5F0',
    tertiary: '#F5EDE5',
  },
  border: '#E8E3DE',
  shadow: 'rgba(61, 40, 23, 0.1)',
};

export const typography = {
  // Serif - for headings (premium, elegant)
  serif: {
    family: 'Georgia, Garamond, serif',
  },
  // Sans-serif - for body (clean, modern)
  sansSerif: {
    family: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  },

  sizes: {
    h1: 32,
    h2: 28,
    h3: 24,
    h4: 20,
    h5: 18,
    subtitle: 16,
    body: 16,
    bodySmall: 14,
    caption: 12,
  },

  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.8,
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

export const borderRadius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  full: 9999,
};

export const shadows = {
  sm: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  md: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.16,
    shadowRadius: 12,
    elevation: 6,
  },
};

export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
};

export type Theme = typeof theme;