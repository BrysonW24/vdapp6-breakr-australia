import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, typography } from '../theme';

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Settings</Text>
        <TouchableOpacity style={styles.item}><Text style={styles.itemText}>Account</Text></TouchableOpacity>
        <TouchableOpacity style={styles.item}><Text style={styles.itemText}>Notifications</Text></TouchableOpacity>
        <TouchableOpacity style={styles.item}><Text style={styles.itemText}>Privacy</Text></TouchableOpacity>
        <TouchableOpacity style={styles.item}><Text style={styles.itemText}>Help & Support</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.item, styles.logout]}><Text style={styles.logoutText}>Log Out</Text></TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background.primary },
  content: { padding: spacing.lg },
  title: { ...typography.h2, color: colors.text.primary, marginBottom: spacing.xl },
  item: { backgroundColor: colors.background.secondary, borderRadius: 12, padding: spacing.md, marginBottom: spacing.sm },
  itemText: { ...typography.body, color: colors.text.primary },
  logout: { backgroundColor: colors.accent.error, marginTop: spacing.lg },
  logoutText: { ...typography.body, color: colors.text.primary, fontWeight: '600', textAlign: 'center' },
});
