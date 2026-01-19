import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography } from '../theme';

export default function CreatePostScreen() {
  const [postContent, setPostContent] = useState('');

  const handlePost = () => {
    console.log('Creating post:', postContent);
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <View style={styles.content}>
          <View style={styles.authorRow}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={24} color={colors.text.tertiary} />
            </View>
            <Text style={styles.authorName}>Your Name</Text>
          </View>

          <TextInput
            style={styles.input}
            placeholder="What's on your mind?"
            placeholderTextColor={colors.text.tertiary}
            value={postContent}
            onChangeText={setPostContent}
            multiline
            textAlignVertical="top"
          />

          <View style={styles.attachments}>
            <TouchableOpacity style={styles.attachButton}>
              <Ionicons name="image-outline" size={24} color={colors.primary.main} />
              <Text style={styles.attachButtonText}>Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.attachButton}>
              <Ionicons name="location-outline" size={24} color={colors.primary.main} />
              <Text style={styles.attachButtonText}>Location</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.attachButton}>
              <Ionicons name="pricetag-outline" size={24} color={colors.primary.main} />
              <Text style={styles.attachButtonText}>Tag Venue</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            style={[styles.postButton, !postContent && styles.postButtonDisabled]}
            onPress={handlePost}
            disabled={!postContent}
          >
            <Text style={[styles.postButtonText, !postContent && styles.postButtonTextDisabled]}>
              Post
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: spacing.lg,
  },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.background.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  authorName: {
    color: colors.text.primary,
    fontWeight: '600',
    fontSize: 16,
    marginLeft: spacing.md,
  },
  input: {
    flex: 1,
    color: colors.text.primary,
    fontSize: 18,
    lineHeight: 26,
  },
  attachments: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: colors.border.light,
    paddingTop: spacing.md,
    gap: spacing.lg,
  },
  attachButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  attachButtonText: {
    color: colors.primary.main,
    fontSize: 14,
  },
  footer: {
    padding: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border.dark,
  },
  postButton: {
    backgroundColor: colors.primary.main,
    paddingVertical: spacing.md,
    borderRadius: 12,
    alignItems: 'center',
  },
  postButtonDisabled: {
    backgroundColor: colors.background.tertiary,
  },
  postButtonText: {
    color: colors.background.primary,
    fontWeight: '600',
    fontSize: 16,
  },
  postButtonTextDisabled: {
    color: colors.text.tertiary,
  },
});
