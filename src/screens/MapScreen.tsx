import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, typography } from '../theme';

export default function MapScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Map</Text>
        <Text style={styles.subtitle}>Find pool halls near you</Text>
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>🗺️</Text>
          <Text style={styles.placeholderDesc}>Map view coming soon</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  content: {
    flex: 1,
    padding: spacing.lg,
  },
  title: {
    ...typography.h2,
    color: colors.text.primary,
    textAlign: 'center',
    marginTop: spacing.lg,
  },
  subtitle: {
    ...typography.body,
    color: colors.text.tertiary,
    textAlign: 'center',
    marginTop: spacing.xs,
  },
  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 64,
    marginBottom: spacing.md,
  },
  placeholderDesc: {
    ...typography.body,
    color: colors.text.secondary,
  },
});
