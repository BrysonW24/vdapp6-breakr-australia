import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography } from '../theme';

const SKILL_LEVELS = ['Beginner', 'Intermediate', 'Advanced', 'Professional'];
const GAME_TYPES = ['8-Ball', '9-Ball', 'Snooker', '10-Ball', 'Straight Pool'];

const NEARBY_PLAYERS = [
  { id: '1', name: 'Mike C.', level: 'Advanced', distance: '0.5 km', rating: 4.8, gamesPlayed: 234 },
  { id: '2', name: 'Sarah T.', level: 'Intermediate', distance: '1.2 km', rating: 4.6, gamesPlayed: 156 },
  { id: '3', name: 'James K.', level: 'Advanced', distance: '2.1 km', rating: 4.9, gamesPlayed: 312 },
];

export default function FindMatchScreen() {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>What do you want to play?</Text>
        <View style={styles.chipContainer}>
          {GAME_TYPES.map((game) => (
            <TouchableOpacity
              key={game}
              style={[styles.chip, selectedGame === game && styles.chipSelected]}
              onPress={() => setSelectedGame(game === selectedGame ? null : game)}
            >
              <Text style={[styles.chipText, selectedGame === game && styles.chipTextSelected]}>
                {game}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Preferred skill level</Text>
        <View style={styles.chipContainer}>
          {SKILL_LEVELS.map((level) => (
            <TouchableOpacity
              key={level}
              style={[styles.chip, selectedLevel === level && styles.chipSelected]}
              onPress={() => setSelectedLevel(level === selectedLevel ? null : level)}
            >
              <Text style={[styles.chipText, selectedLevel === level && styles.chipTextSelected]}>
                {level}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Players Nearby</Text>
        {NEARBY_PLAYERS.map((player) => (
          <View key={player.id} style={styles.playerCard}>
            <View style={styles.playerAvatar}>
              <Ionicons name="person" size={24} color={colors.text.tertiary} />
            </View>
            <View style={styles.playerInfo}>
              <Text style={styles.playerName}>{player.name}</Text>
              <View style={styles.playerDetails}>
                <Text style={styles.playerLevel}>{player.level}</Text>
                <Text style={styles.playerDot}>•</Text>
                <Ionicons name="location" size={12} color={colors.text.tertiary} />
                <Text style={styles.playerDistance}>{player.distance}</Text>
              </View>
              <View style={styles.playerStats}>
                <Ionicons name="star" size={12} color={colors.accent.warning} />
                <Text style={styles.playerRating}>{player.rating}</Text>
                <Text style={styles.playerGames}>{player.gamesPlayed} games</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.challengeButton}>
              <Text style={styles.challengeButtonText}>Challenge</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={20} color={colors.background.primary} />
          <Text style={styles.searchButtonText}>Find Match</Text>
        </TouchableOpacity>
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
    padding: spacing.lg,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.text.primary,
    marginBottom: spacing.md,
    marginTop: spacing.lg,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  chip: {
    backgroundColor: colors.background.secondary,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border.light,
  },
  chipSelected: {
    backgroundColor: colors.primary.main,
    borderColor: colors.primary.main,
  },
  chipText: {
    color: colors.text.secondary,
    fontSize: 14,
  },
  chipTextSelected: {
    color: colors.background.primary,
    fontWeight: '600',
  },
  playerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background.secondary,
    padding: spacing.md,
    borderRadius: 12,
    marginBottom: spacing.sm,
  },
  playerAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.background.tertiary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerInfo: {
    flex: 1,
    marginLeft: spacing.md,
  },
  playerName: {
    color: colors.text.primary,
    fontWeight: '600',
    fontSize: 16,
  },
  playerDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    gap: 4,
  },
  playerLevel: {
    color: colors.primary.main,
    fontSize: 12,
    fontWeight: '500',
  },
  playerDot: {
    color: colors.text.tertiary,
  },
  playerDistance: {
    color: colors.text.tertiary,
    fontSize: 12,
  },
  playerStats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    gap: 4,
  },
  playerRating: {
    color: colors.text.secondary,
    fontSize: 12,
    marginRight: 8,
  },
  playerGames: {
    color: colors.text.tertiary,
    fontSize: 12,
  },
  challengeButton: {
    backgroundColor: colors.primary.main,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 8,
  },
  challengeButtonText: {
    color: colors.background.primary,
    fontWeight: '600',
    fontSize: 12,
  },
  footer: {
    padding: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border.dark,
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary.main,
    paddingVertical: spacing.md,
    borderRadius: 12,
    gap: spacing.sm,
  },
  searchButtonText: {
    color: colors.background.primary,
    fontWeight: '600',
    fontSize: 16,
  },
});
