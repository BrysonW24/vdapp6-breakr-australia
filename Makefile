# Makefile for PoolMate Australia Expo App

.PHONY: install update start stop android ios web build-ios test lint type-check clean

# Install dependencies
install:
	npm install

# Update dependencies to latest compatible versions
update:
	npm update

# Start Expo development server
start:
	npx expo start

# Stop Expo development server
stop:
	pkill -f "expo start" || true

# Start on Android emulator/device
android:
	npx expo start --android

# Start on iOS simulator/device
ios:
	npx expo start --ios

# Start on web
web:
	npx expo start --web

# Prebuild and setup iOS (requires Xcode and CocoaPods)
build-ios:
	npx expo prebuild --platform ios && cd ios && pod install && cd ..

# Run tests
test:
	npm test

# Run tests in watch mode
test-watch:
	npm run test:watch

# Run tests with coverage
test-coverage:
	npm run test:coverage

# Lint the codebase
lint:
	npm run lint

# Type check TypeScript
type-check:
	npm run type-check

# Clean node_modules and reinstall
clean:
	rm -rf node_modules package-lock.json && npm install