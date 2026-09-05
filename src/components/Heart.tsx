/**
 * Heart Icon Component
 * SVG-based heart icon for logo and accents
 */

import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { theme } from '@/styles/theme';

interface HeartProps {
  size?: number;
  color?: string;
  style?: ViewStyle;
  filled?: boolean;
}

const Heart: React.FC<HeartProps> = ({
  size = 24,
  color = theme.colors.coral,
  style,
  filled = true,
}) => {
  // Simple heart shape using SVG path
  const heartPath = `M${size / 2} ${size * 0.35}C${size / 2} ${size * 0.35}, ${size * 0.25} ${size * 0.2}, ${size * 0.15} ${size * 0.25}C${size * 0.05} ${size * 0.35}, ${size * 0.1} ${size * 0.5}, ${size / 2} ${size * 0.85}C${size * 0.9} ${size * 0.5}, ${size * 0.95} ${size * 0.35}, ${size * 0.85} ${size * 0.25}C${size * 0.75} ${size * 0.2}, ${size / 2} ${size * 0.35}, ${size / 2} ${size * 0.35}Z`;

  return (
    <View style={[{ width: size, height: size }, style]}>
      {/* Simplified heart using View components */}
      <View
        style={[
          styles.heart,
          {
            width: size,
            height: size,
            backgroundColor: filled ? color : 'transparent',
            borderColor: color,
            borderWidth: filled ? 0 : 2,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heart: {
    borderRadius: 50,
  },
});

export default Heart;