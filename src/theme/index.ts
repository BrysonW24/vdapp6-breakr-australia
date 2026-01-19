export const colors = {
  primary: {
    main: '#10B981',
    light: '#34D399',
    dark: '#059669',
  },
  background: {
    primary: '#111827',
    secondary: '#1F2937',
    tertiary: '#374151',
  },
  text: {
    primary: '#F9FAFB',
    secondary: '#D1D5DB',
    tertiary: '#9CA3AF',
  },
  border: {
    light: '#374151',
    dark: '#1F2937',
  },
  accent: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const typography = {
  h1: { fontSize: 32, fontWeight: '700' as const },
  h2: { fontSize: 24, fontWeight: '600' as const },
  h3: { fontSize: 20, fontWeight: '600' as const },
  body: { fontSize: 16, fontWeight: '400' as const },
  caption: { fontSize: 14, fontWeight: '400' as const },
};
