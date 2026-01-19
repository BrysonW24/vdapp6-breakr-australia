import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, typography } from '../theme';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>BREAKR</Text>
        <Text style={styles.subtitle}>Find Your Game</Text>

        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionCard}>
            <Text style={styles.actionIcon}>🎱</Text>
            <Text style={styles.actionTitle}>Book a Table</Text>
            <Text style={styles.actionDesc}>Reserve your spot</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>
            <Text style={styles.actionIcon}>📍</Text>
            <Text style={styles.actionTitle}>Find Venues</Text>
            <Text style={styles.actionDesc}>Pool halls nearby</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>
            <Text style={styles.actionIcon}>🏆</Text>
            <Text style={styles.actionTitle}>Compete</Text>
            <Text style={styles.actionDesc}>Join tournaments</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>
            <Text style={styles.actionIcon}>👥</Text>
            <Text style={styles.actionTitle}>Find a Match</Text>
            <Text style={styles.actionDesc}>Play with others</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nearby Venues</Text>
          <View style={styles.venueCard}>
            <Text style={styles.venueName}>Break Time Billiards</Text>
            <Text style={styles.venueInfo}>12 tables • 2.3km away • Open now</Text>
          </View>
          <View style={styles.venueCard}>
            <Text style={styles.venueName}>Cue Masters Pool Hall</Text>
            <Text style={styles.venueInfo}>8 tables • 4.1km away • Open now</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  content: {
    padding: spacing.lg,
  },
  title: {
    ...typography.h1,
    color: colors.primary.main,
    textAlign: 'center',
    marginTop: spacing.lg,
  },
  subtitle: {
    ...typography.body,
    color: colors.text.tertiary,
    textAlign: 'center',
    marginTop: spacing.xs,
    marginBottom: spacing.xl,
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionCard: {
    backgroundColor: colors.background.secondary,
    borderRadius: 16,
    padding: spacing.md,
    width: '48%',
    marginBottom: spacing.md,
    alignItems: 'center',
  },
  actionIcon: {
    fontSize: 32,
    marginBottom: spacing.sm,
  },
  actionTitle: {
    ...typography.body,
    color: colors.text.primary,
    fontWeight: '600',
  },
  actionDesc: {
    ...typography.caption,
    color: colors.text.tertiary,
    marginTop: spacing.xs,
  },
  section: {
    marginTop: spacing.lg,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.text.primary,
    marginBottom: spacing.md,
  },
  venueCard: {
    backgroundColor: colors.background.secondary,
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  venueName: {
    ...typography.body,
    color: colors.text.primary,
    fontWeight: '600',
  },
  venueInfo: {
    ...typography.caption,
    color: colors.text.tertiary,
    marginTop: spacing.xs,
  },
});
