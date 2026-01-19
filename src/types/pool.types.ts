export interface Venue {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  postcode: string;
  latitude: number;
  longitude: number;
  phone: string;
  email?: string;
  website?: string;
  description: string;
  images: string[];
  rating: number;
  reviewCount: number;
  isOpen: boolean;
  openingHours: OpeningHours;
  tables: Table[];
  amenities: string[];
  priceRange: PriceRange;
  createdAt: string;
  updatedAt: string;
}

export interface OpeningHours {
  monday: DayHours;
  tuesday: DayHours;
  wednesday: DayHours;
  thursday: DayHours;
  friday: DayHours;
  saturday: DayHours;
  sunday: DayHours;
}

export interface DayHours {
  open: string;
  close: string;
  isClosed: boolean;
}

export interface Table {
  id: string;
  venueId: string;
  number: number;
  type: TableType;
  size: TableSize;
  status: TableStatus;
  hourlyRate: number;
}

export type TableType = '8-ball' | '9-ball' | 'snooker' | 'carom' | 'english';
export type TableSize = '7ft' | '8ft' | '9ft' | '10ft' | '12ft';
export type TableStatus = 'available' | 'occupied' | 'reserved' | 'maintenance';

export interface PriceRange {
  min: number;
  max: number;
  currency: string;
  unit: 'hour' | 'game';
}

export interface Player {
  id: string;
  userId: string;
  displayName: string;
  avatar?: string;
  skillLevel: SkillLevel;
  preferredGames: TableType[];
  rating: number;
  gamesPlayed: number;
  wins: number;
  losses: number;
  draws: number;
  achievements: Achievement[];
  createdAt: string;
}

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'professional';

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt: string;
}

export interface Match {
  id: string;
  venueId: string;
  tableId: string;
  players: MatchPlayer[];
  gameType: TableType;
  status: MatchStatus;
  winner?: string;
  score?: MatchScore;
  startedAt: string;
  endedAt?: string;
}

export interface MatchPlayer {
  playerId: string;
  displayName: string;
  avatar?: string;
  score: number;
}

export type MatchStatus = 'pending' | 'in_progress' | 'completed' | 'cancelled';

export interface MatchScore {
  frames: FrameScore[];
  totalFrames: number;
}

export interface FrameScore {
  frameNumber: number;
  winnerId: string;
  playerScores: Record<string, number>;
}

export interface Booking {
  id: string;
  venueId: string;
  tableId: string;
  userId: string;
  date: string;
  startTime: string;
  endTime: string;
  duration: number;
  status: BookingStatus;
  totalPrice: number;
  createdAt: string;
}

export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed' | 'no_show';

export interface Review {
  id: string;
  venueId: string;
  userId: string;
  userDisplayName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  images?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Tournament {
  id: string;
  venueId: string;
  name: string;
  description: string;
  gameType: TableType;
  format: TournamentFormat;
  maxPlayers: number;
  entryFee: number;
  prizePool: number;
  startDate: string;
  endDate: string;
  registrationDeadline: string;
  status: TournamentStatus;
  participants: TournamentParticipant[];
}

export type TournamentFormat = 'single_elimination' | 'double_elimination' | 'round_robin' | 'swiss';
export type TournamentStatus = 'upcoming' | 'registration_open' | 'in_progress' | 'completed' | 'cancelled';

export interface TournamentParticipant {
  playerId: string;
  displayName: string;
  seed?: number;
  eliminated: boolean;
  placement?: number;
}

export interface CommunityPost {
  id: string;
  authorId: string;
  authorName: string;
  authorAvatar?: string;
  content: string;
  images?: string[];
  venueTag?: string;
  likes: number;
  comments: number;
  createdAt: string;
}

export interface PostComment {
  id: string;
  postId: string;
  authorId: string;
  authorName: string;
  authorAvatar?: string;
  content: string;
  createdAt: string;
}
