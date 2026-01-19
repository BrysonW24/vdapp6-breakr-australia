export type RootStackParamList = {
  Main: undefined;
  Auth: undefined;
  Details: undefined;
  Settings: undefined;
  Notifications: undefined;
  VenueSearch: undefined;
  VenueDetails: { venueId?: string };
  BookTable: { venueId?: string };
  Classes: undefined;
  Competitions: undefined;
  FindMatch: undefined;
  EditProfile: undefined;
  CreatePost: undefined;
  CreateGroup: undefined;
  Premium: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Map: undefined;
  Community: undefined;
  Profile: undefined;
};
