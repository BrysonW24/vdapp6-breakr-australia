export const APP_NAME = 'BREAKR';
export const APP_VERSION = '1.0.0';

export const SKILL_LEVELS = ['Beginner', 'Intermediate', 'Advanced', 'Professional'] as const;
export const GAME_TYPES = ['8-Ball', '9-Ball', 'Snooker', '10-Ball', 'Straight Pool', 'Carom'] as const;
export const TABLE_SIZES = ['7ft', '8ft', '9ft', '10ft', '12ft'] as const;

export const DEFAULT_SEARCH_RADIUS = 10; // km
export const MAX_SEARCH_RADIUS = 50; // km

export const BOOKING_MIN_DURATION = 30; // minutes
export const BOOKING_MAX_DURATION = 480; // minutes (8 hours)

export const API_BASE_URL = 'https://api.breakr.app';
export const WEBSOCKET_URL = 'wss://ws.breakr.app';

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER_DATA: 'user_data',
  PREFERENCES: 'preferences',
  RECENT_SEARCHES: 'recent_searches',
  FAVORITE_VENUES: 'favorite_venues',
} as const;

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
} as const;
