import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, typography } from '../theme';

export default function CompetitionsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Competitions</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Weekly 8-Ball Tournament</Text>
          <Text style={styles.cardInfo}>Every Saturday • $50 entry</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Monthly Championship</Text>
          <Text style={styles.cardInfo}>Jan 25 • $100 entry</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background.primary },
  content: { padding: spacing.lg },
  title: { ...typography.h2, color: colors.text.primary, textAlign: 'center', marginTop: spacing.lg, marginBottom: spacing.xl },
  card: { backgroundColor: colors.background.secondary, borderRadius: 12, padding: spacing.md, marginBottom: spacing.sm },
  cardTitle: { ...typography.body, color: colors.text.primary, fontWeight: '600' },
  cardInfo: { ...typography.caption, color: colors.text.tertiary, marginTop: spacing.xs },
});
