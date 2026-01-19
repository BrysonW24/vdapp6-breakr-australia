import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography } from '../theme';

const VENUE_DATA = {
  id: '1',
  name: 'Break Time Billiards',
  address: '123 Pool Lane, Melbourne VIC 3000',
  rating: 4.8,
  reviewCount: 124,
  tables: 12,
  isOpen: true,
  hours: '10:00 AM - 2:00 AM',
  phone: '+61 3 1234 5678',
  description: 'Premier pool and billiards venue with professional-grade tables, full bar service, and a friendly atmosphere. Perfect for casual games or serious competition.',
  amenities: ['Full Bar', 'Food Menu', 'Private Rooms', 'Tournaments', 'Coaching'],
  tableTypes: ['8-Ball', '9-Ball', 'Snooker', 'Carom'],
  priceRange: '$15-25/hour',
};

export default function VenueDetailsScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://picsum.photos/400/250?random=1' }}
            style={styles.headerImage}
          />
          <View style={styles.imageBadge}>
            <Ionicons name="camera" size={14} color={colors.text.primary} />
            <Text style={styles.imageBadgeText}>12 photos</Text>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Text style={styles.name}>{VENUE_DATA.name}</Text>
              <View style={styles.ratingRow}>
                <Ionicons name="star" size={16} color={colors.accent.warning} />
                <Text style={styles.rating}>{VENUE_DATA.rating}</Text>
                <Text style={styles.reviewCount}>({VENUE_DATA.reviewCount} reviews)</Text>
              </View>
            </View>
            <View style={styles.statusBadge}>
              <View style={[styles.statusDot, VENUE_DATA.isOpen && styles.statusDotOpen]} />
              <Text style={styles.statusText}>{VENUE_DATA.isOpen ? 'Open' : 'Closed'}</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="location-outline" size={18} color={colors.text.tertiary} />
            <Text style={styles.infoText}>{VENUE_DATA.address}</Text>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="time-outline" size={18} color={colors.text.tertiary} />
            <Text style={styles.infoText}>{VENUE_DATA.hours}</Text>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="call-outline" size={18} color={colors.text.tertiary} />
            <Text style={styles.infoText}>{VENUE_DATA.phone}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About</Text>
            <Text style={styles.description}>{VENUE_DATA.description}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Tables ({VENUE_DATA.tables})</Text>
            <View style={styles.chipContainer}>
              {VENUE_DATA.tableTypes.map((type) => (
                <View key={type} style={styles.chip}>
                  <Text style={styles.chipText}>{type}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Amenities</Text>
            <View style={styles.amenitiesGrid}>
              {VENUE_DATA.amenities.map((amenity) => (
                <View key={amenity} style={styles.amenityItem}>
                  <Ionicons name="checkmark-circle" size={18} color={colors.primary.main} />
                  <Text style={styles.amenityText}>{amenity}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.priceSection}>
            <Text style={styles.priceLabel}>Price Range</Text>
            <Text style={styles.priceValue}>{VENUE_DATA.priceRange}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.secondaryButton}>
          <Ionicons name="call" size={20} color={colors.primary.main} />
          <Text style={styles.secondaryButtonText}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.primaryButton}>
          <Ionicons name="calendar" size={20} color={colors.background.primary} />
          <Text style={styles.primaryButtonText}>Book a Table</Text>
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
  imageContainer: {
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: 200,
    backgroundColor: colors.background.secondary,
  },
  imageBadge: {
    position: 'absolute',
    bottom: spacing.md,
    right: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 16,
    gap: 4,
  },
  imageBadgeText: {
    color: colors.text.primary,
    fontSize: 12,
  },
  content: {
    padding: spacing.lg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },
  headerLeft: {
    flex: 1,
  },
  name: {
    ...typography.h2,
    color: colors.text.primary,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.xs,
    gap: 4,
  },
  rating: {
    color: colors.text.primary,
    fontWeight: '600',
    marginLeft: 2,
  },
  reviewCount: {
    color: colors.text.tertiary,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background.secondary,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 12,
    gap: 6,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.accent.error,
  },
  statusDotOpen: {
    backgroundColor: colors.accent.success,
  },
  statusText: {
    color: colors.text.secondary,
    fontSize: 12,
    fontWeight: '500',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
    gap: spacing.sm,
  },
  infoText: {
    color: colors.text.secondary,
    flex: 1,
  },
  section: {
    marginTop: spacing.lg,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.text.primary,
    marginBottom: spacing.sm,
  },
  description: {
    color: colors.text.secondary,
    lineHeight: 22,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  chip: {
    backgroundColor: colors.background.secondary,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 16,
  },
  chipText: {
    color: colors.text.secondary,
    fontSize: 14,
  },
  amenitiesGrid: {
    gap: spacing.sm,
  },
  amenityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  amenityText: {
    color: colors.text.secondary,
  },
  priceSection: {
    marginTop: spacing.lg,
    backgroundColor: colors.background.secondary,
    padding: spacing.md,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceLabel: {
    color: colors.text.tertiary,
  },
  priceValue: {
    color: colors.primary.main,
    fontWeight: '600',
    fontSize: 18,
  },
  footer: {
    flexDirection: 'row',
    padding: spacing.md,
    gap: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border.dark,
    backgroundColor: colors.background.primary,
  },
  secondaryButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.primary.main,
    gap: spacing.sm,
  },
  secondaryButtonText: {
    color: colors.primary.main,
    fontWeight: '600',
  },
  primaryButton: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary.main,
    paddingVertical: spacing.md,
    borderRadius: 12,
    gap: spacing.sm,
  },
  primaryButtonText: {
    color: colors.background.primary,
    fontWeight: '600',
  },
});
