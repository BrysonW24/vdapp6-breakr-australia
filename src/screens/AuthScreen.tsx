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

export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleAuth = () => {
    console.log(isLogin ? 'Login' : 'Sign up', { email, password });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <View style={styles.header}>
          <Text style={styles.logo}>BREAKR</Text>
          <Text style={styles.tagline}>Find Your Game</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.title}>{isLogin ? 'Welcome Back' : 'Create Account'}</Text>

          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={20} color={colors.text.tertiary} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={colors.text.tertiary}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color={colors.text.tertiary} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={colors.text.tertiary}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color={colors.text.tertiary}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.primaryButton} onPress={handleAuth}>
            <Text style={styles.primaryButtonText}>
              {isLogin ? 'Sign In' : 'Create Account'}
            </Text>
          </TouchableOpacity>

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or continue with</Text>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialButton}>
              <Ionicons name="logo-google" size={24} color={colors.text.primary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Ionicons name="logo-apple" size={24} color={colors.text.primary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Ionicons name="logo-facebook" size={24} color={colors.text.primary} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
            <Text style={styles.switchText}>
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
              <Text style={styles.switchTextBold}>{isLogin ? 'Sign Up' : 'Sign In'}</Text>
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
  header: {
    alignItems: 'center',
    paddingTop: spacing.xl * 2,
    paddingBottom: spacing.xl,
  },
  logo: {
    ...typography.h1,
    color: colors.primary.main,
  },
  tagline: {
    ...typography.body,
    color: colors.text.tertiary,
    marginTop: spacing.xs,
  },
  form: {
    flex: 1,
    padding: spacing.lg,
  },
  title: {
    ...typography.h2,
    color: colors.text.primary,
    marginBottom: spacing.lg,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background.secondary,
    borderRadius: 12,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border.light,
  },
  input: {
    flex: 1,
    paddingVertical: spacing.md,
    marginLeft: spacing.sm,
    color: colors.text.primary,
    fontSize: 16,
  },
  primaryButton: {
    backgroundColor: colors.primary.main,
    paddingVertical: spacing.md,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: spacing.sm,
  },
  primaryButtonText: {
    color: colors.background.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.lg,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border.light,
  },
  dividerText: {
    color: colors.text.tertiary,
    marginHorizontal: spacing.md,
    fontSize: 14,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.md,
    marginBottom: spacing.lg,
  },
  socialButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.background.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border.light,
  },
  switchText: {
    color: colors.text.tertiary,
    textAlign: 'center',
    fontSize: 14,
  },
  switchTextBold: {
    color: colors.primary.main,
    fontWeight: '600',
  },
});
