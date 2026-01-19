import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, typography } from '../theme';

export default function NotificationsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Notifications</Text>
        <View style={styles.notification}>
          <Text style={styles.notificationTitle}>Game Reminder</Text>
          <Text style={styles.notificationText}>Your table booking is in 1 hour</Text>
        </View>
        <View style={styles.notification}>
          <Text style={styles.notificationTitle}>New Match Request</Text>
          <Text style={styles.notificationText}>John wants to play with you</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background.primary },
  content: { padding: spacing.lg },
  title: { ...typography.h2, color: colors.text.primary, marginBottom: spacing.xl },
  notification: { backgroundColor: colors.background.secondary, borderRadius: 12, padding: spacing.md, marginBottom: spacing.sm },
  notificationTitle: { ...typography.body, color: colors.text.primary, fontWeight: '600' },
  notificationText: { ...typography.caption, color: colors.text.tertiary, marginTop: spacing.xs },
});
