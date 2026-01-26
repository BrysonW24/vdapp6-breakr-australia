<p align="center">
  <img src="assets/icon.png" width="120" alt="BREAKR Logo">
</p>

<h1 align="center">BREAKR Australia</h1>

<p align="center">
  <strong>Connect. Compete. Conquer the Table.</strong><br>
  <sub>The social network for Australia's pool and billiards community.</sub>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Platform-iOS%20%7C%20Android-blue?style=flat-square" alt="Platform">
  <img src="https://img.shields.io/badge/Expo-SDK%2054-black?style=flat-square&logo=expo" alt="Expo SDK">
  <img src="https://img.shields.io/badge/React%20Native-0.76-61dafb?style=flat-square&logo=react" alt="React Native">
  <img src="https://img.shields.io/badge/TypeScript-5.3-3178c6?style=flat-square&logo=typescript" alt="TypeScript">
</p>

---

## The Problem

Finding a decent game of pool shouldn't be this hard. Where are the tables? Who's playing at your level? When's the next tournament?

**BREAKR** brings Australia's scattered pool community into one place - find venues, match with players, track your progress, and compete in local leagues.

---

## What You Get

| Feature | Description |
|---------|-------------|
| **Find Venues** | Discover pool halls and pubs with tables near you |
| **Match Players** | Connect with players at your skill level |
| **Track Stats** | Monitor wins, losses, and your rising rank |
| **Competitions** | Join local tournaments and leagues |
| **Learn** | Access tutorials to sharpen your game |
| **Community** | Follow players, share posts, join groups |

---

## Quick Start

```bash
# Install dependencies
npm install

# Start Expo dev server
npx expo start

# Run on simulators
npm run ios
npm run android
```

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Expo SDK 54** | React Native framework |
| **TypeScript** | Type safety |
| **Redux Toolkit** | State management |
| **React Navigation** | Navigation |
| **Firebase** | Auth & database |

---

## Project Structure

```
src/
├── components/     # Reusable UI components
├── navigation/     # Navigation config
├── screens/        # App screens
├── services/       # API & business logic
├── store/          # Redux store & slices
├── theme/          # Colors, typography
├── types/          # TypeScript definitions
└── utils/          # Helpers
```

---

## Design

Dark theme with emerald green (#10B981) accents:

- Gradient backgrounds
- Card-based layouts
- Skill level badges
- Social feed with interactions

---

## App Info

| Key | Value |
|-----|-------|
| **Slug** | `breakr` |
| **iOS Bundle** | `com.vivacity.breakr` |
| **Android Package** | `com.vivacity.breakr` |

---

## Deployment

```bash
# Build for production
eas build -p ios --profile production
eas build -p android --profile production

# Submit to stores
eas submit -p ios
eas submit -p android
```

---

<p align="center">
  <strong>Built by Vivacity Digital</strong><br>
  <a href="https://vivacitydigital.com.au">vivacitydigital.com.au</a>
</p>

<p align="center">
  <sub>2025 Vivacity Digital. All rights reserved.</sub>
</p>
