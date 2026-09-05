/**
 * Heading Component
 * Premium serif typography for headings
 */

import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';
import { theme } from '@/styles/theme';

interface HeadingProps extends TextProps {
  level: 1 | 2 | 3 | 4 | 5;
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ level, children, style, ...props }) => {
  const getHeadingStyle = () => {
    const sizeKey = `h${level}` as keyof typeof theme.typography.sizes;
    return {
      fontSize: theme.typography.sizes[sizeKey],
      fontFamily: theme.typography.serif.family,
      fontWeight: '700',
      color: theme.colors.text.primary,
    };
  };

  return (
    <Text style={[getHeadingStyle(), style]} {...props}>
      {children}
    </Text>
  );
};

export default Heading;