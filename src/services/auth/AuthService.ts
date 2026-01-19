import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '../../constants';

export interface User {
  id: string;
  email: string;
  displayName: string;
  avatar?: string;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

class AuthService {
  async signIn(email: string, password: string): Promise<{ user: User; token: string }> {
    // TODO: Implement actual API call
    console.log('Signing in with:', email);

    const mockUser: User = {
      id: '1',
      email,
      displayName: email.split('@')[0],
      createdAt: new Date().toISOString(),
    };
    const mockToken = 'mock-jwt-token';

    await this.storeAuthData(mockUser, mockToken);
    return { user: mockUser, token: mockToken };
  }

  async signUp(email: string, password: string, displayName: string): Promise<{ user: User; token: string }> {
    // TODO: Implement actual API call
    console.log('Signing up with:', email, displayName);

    const mockUser: User = {
      id: '1',
      email,
      displayName,
      createdAt: new Date().toISOString(),
    };
    const mockToken = 'mock-jwt-token';

    await this.storeAuthData(mockUser, mockToken);
    return { user: mockUser, token: mockToken };
  }

  async signOut(): Promise<void> {
    await AsyncStorage.multiRemove([STORAGE_KEYS.AUTH_TOKEN, STORAGE_KEYS.USER_DATA]);
  }

  async getStoredAuth(): Promise<{ user: User | null; token: string | null }> {
    try {
      const [token, userData] = await AsyncStorage.multiGet([
        STORAGE_KEYS.AUTH_TOKEN,
        STORAGE_KEYS.USER_DATA,
      ]);

      return {
        token: token[1],
        user: userData[1] ? JSON.parse(userData[1]) : null,
      };
    } catch (error) {
      console.error('Error getting stored auth:', error);
      return { user: null, token: null };
    }
  }

  private async storeAuthData(user: User, token: string): Promise<void> {
    await AsyncStorage.multiSet([
      [STORAGE_KEYS.AUTH_TOKEN, token],
      [STORAGE_KEYS.USER_DATA, JSON.stringify(user)],
    ]);
  }

  async signInWithGoogle(): Promise<{ user: User; token: string }> {
    // TODO: Implement Google Sign-In
    console.log('Google Sign-In');
    throw new Error('Google Sign-In not implemented');
  }

  async signInWithApple(): Promise<{ user: User; token: string }> {
    // TODO: Implement Apple Sign-In
    console.log('Apple Sign-In');
    throw new Error('Apple Sign-In not implemented');
  }

  async signInWithFacebook(): Promise<{ user: User; token: string }> {
    // TODO: Implement Facebook Sign-In
    console.log('Facebook Sign-In');
    throw new Error('Facebook Sign-In not implemented');
  }
}

export const authService = new AuthService();
export default authService;
