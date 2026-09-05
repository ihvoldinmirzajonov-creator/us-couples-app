/**
 * Button Component
 * Primary action button with premium styling
 */

import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native';
import { theme } from '@/styles/theme';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  ...props
}) => {
  const getButtonStyle = () => {
    const baseStyle = [styles.button, styles[`button_${size}`]];

    switch (variant) {
      case 'primary':
        baseStyle.push(styles.buttonPrimary);
        break;
      case 'secondary':
        baseStyle.push(styles.buttonSecondary);
        break;
      case 'tertiary':
        baseStyle.push(styles.buttonTertiary);
        break;
    }

    if (disabled || loading) {
      baseStyle.push(styles.buttonDisabled);
    }

    return baseStyle;
  };

  const getTextStyle = () => {
    const baseStyle = [styles.text, styles[`text_${size}`]];
    if (variant === 'tertiary') {
      baseStyle.push(styles.textTertiary);
    }
    return baseStyle;
  };

  return (
    <TouchableOpacity
      style={getButtonStyle()}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'tertiary' ? theme.colors.deepBrown : theme.colors.white}
          size="small"
        />
      ) : (
        <Text style={getTextStyle()}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: theme.borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    ...theme.shadows.sm,
  },
  button_sm: {
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
  },
  button_md: {
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
  },
  button_lg: {
    paddingVertical: theme.spacing.lg,
    paddingHorizontal: theme.spacing.xl,
  },
  buttonPrimary: {
    backgroundColor: theme.colors.coral,
  },
  buttonSecondary: {
    backgroundColor: theme.colors.deepBrown,
  },
  buttonTertiary: {
    backgroundColor: theme.colors.lightBeige,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  text: {
    fontFamily: theme.typography.sansSerif.family,
    fontWeight: '600',
    color: theme.colors.white,
  },
  text_sm: {
    fontSize: theme.typography.sizes.bodySmall,
  },
  text_md: {
    fontSize: theme.typography.sizes.body,
  },
  text_lg: {
    fontSize: theme.typography.sizes.h5,
  },
  textTertiary: {
    color: theme.colors.deepBrown,
  },
});

export default Button;