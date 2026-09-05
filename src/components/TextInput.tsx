/**
 * Text Input Component
 * Premium styled text input field
 */

import React from 'react';
import {
  TextInput as RNTextInput,
  View,
  Text,
  StyleSheet,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import { theme } from '@/styles/theme';

interface TextInputProps extends RNTextInputProps {
  label?: string;
  error?: string;
  required?: boolean;
}

const TextInput = React.forwardRef<RNTextInput, TextInputProps>((
  { label, error, required, style, ...props },
  ref
) => {
  return (
    <View style={styles.container}>
      {label && (
        <Text style={styles.label}>
          {label}
          {required && <Text style={styles.required}>*</Text>}
        </Text>
      )}
      <RNTextInput
        ref={ref}
        style={[styles.input, error && styles.inputError, style]}
        placeholderTextColor={theme.colors.text.light}
        {...props}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.md,
  },
  label: {
    fontSize: theme.typography.sizes.bodySmall,
    fontWeight: '600',
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.sm,
    fontFamily: theme.typography.sansSerif.family,
  },
  required: {
    color: theme.colors.error,
  },
  input: {
    backgroundColor: theme.colors.background.secondary,
    borderRadius: theme.borderRadius.md,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    fontSize: theme.typography.sizes.body,
    color: theme.colors.text.primary,
    fontFamily: theme.typography.sansSerif.family,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  inputError: {
    borderColor: theme.colors.error,
  },
  errorText: {
    color: theme.colors.error,
    fontSize: theme.typography.sizes.caption,
    marginTop: theme.spacing.sm,
    fontFamily: theme.typography.sansSerif.family,
  },
});

export default TextInput;