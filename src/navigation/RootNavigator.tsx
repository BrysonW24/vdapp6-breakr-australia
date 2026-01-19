import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import CommunityScreen from '../screens/CommunityScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AuthScreen from '../screens/AuthScreen';
import SettingsScreen from '../screens/SettingsScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import VenueDetailsScreen from '../screens/VenueDetailsScreen';
import VenueListScreen from '../screens/VenueListScreen';
import BookTableScreen from '../screens/BookTableScreen';
import FindMatchScreen from '../screens/FindMatchScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import CreateGroupScreen from '../screens/CreateGroupScreen';
import PremiumScreen from '../screens/PremiumScreen';
import ClassesScreen from '../screens/ClassesScreen';
import CompetitionsScreen from '../screens/CompetitionsScreen';
import MapScreen from '../screens/MapScreen';

export type RootStackParamList = {
  Main: undefined;
  Auth: undefined;
  Settings: undefined;
  Notifications: undefined;
  VenueDetails: { venueId: string };
  VenueList: undefined;
  BookTable: { venueId?: string };
  FindMatch: undefined;
  EditProfile: undefined;
  CreatePost: undefined;
  CreateGroup: undefined;
  Premium: undefined;
  Classes: undefined;
  Competitions: undefined;
  Map: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Community') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else {
            iconName = 'ellipse';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary.main,
        tabBarInactiveTintColor: colors.text.tertiary,
        tabBarStyle: {
          backgroundColor: colors.background.secondary,
          borderTopColor: colors.border.dark,
        },
        headerStyle: {
          backgroundColor: colors.background.primary,
        },
        headerTintColor: colors.text.primary,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Community" component={CommunityScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background.primary },
        }}
      >
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: true, title: 'Settings' }} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} options={{ headerShown: true, title: 'Notifications' }} />
        <Stack.Screen name="VenueDetails" component={VenueDetailsScreen} options={{ headerShown: true, title: 'Venue' }} />
        <Stack.Screen name="VenueList" component={VenueListScreen} options={{ headerShown: true, title: 'Venues' }} />
        <Stack.Screen name="BookTable" component={BookTableScreen} options={{ headerShown: true, title: 'Book a Table' }} />
        <Stack.Screen name="FindMatch" component={FindMatchScreen} options={{ headerShown: true, title: 'Find a Match' }} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ headerShown: true, title: 'Edit Profile' }} />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} options={{ headerShown: true, title: 'Create Post' }} />
        <Stack.Screen name="CreateGroup" component={CreateGroupScreen} options={{ headerShown: true, title: 'Create Group' }} />
        <Stack.Screen name="Premium" component={PremiumScreen} options={{ headerShown: true, title: 'Go Premium' }} />
        <Stack.Screen name="Classes" component={ClassesScreen} options={{ headerShown: true, title: 'Classes' }} />
        <Stack.Screen name="Competitions" component={CompetitionsScreen} options={{ headerShown: true, title: 'Competitions' }} />
        <Stack.Screen name="Map" component={MapScreen} options={{ headerShown: true, title: 'Map' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
