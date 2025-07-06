# WingsFly - Task Management App

A beautiful and intuitive task management application built with React Native CLI and TypeScript.

## Features

- Modern and responsive UI
- Task management with due dates
- Progress tracking
- Dark/Light theme support
- Smooth animations
- Cross-platform (iOS & Android)

## Prerequisites

- Node.js (v16 or later)
- npm or yarn
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)
- CocoaPods (for iOS)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/RaviTwari03/WingsFly-App.git
cd WingsFly-App
```

### 2. Install dependencies

```bash
# Using npm
npm install

# OR using Yarn
yarn install

# Install iOS dependencies (macOS only)
cd ios && pod install && cd ..
```

### 3. Run the app

#### iOS

```bash
# Start Metro bundler
npx react-native start

# In a new terminal, run the app on iOS simulator
npx react-native run-ios

# For a specific iOS device
npx react-native run-ios --simulator="iPhone 15"
```

#### Android

```bash
# Make sure you have an Android emulator running or a device connected
npx react-native run-android
```

## Project Structure

```
src/
├── assets/           # Images, fonts, and other static files
├── components/       # Reusable UI components
├── navigation/       # Navigation configuration
├── screens/          # App screens
├── theme/            # Theme and styling
├── utils/            # Utility functions
└── services/         # API and other services
```

## Available Scripts

- `npm start` or `yarn start` - Start Metro bundler
- `npm run ios` or `yarn ios` - Run on iOS simulator
- `npm run android` or `yarn android` - Run on Android emulator/device
- `npm test` or `yarn test` - Run tests
- `npm run lint` or `yarn lint` - Run ESLint

## Dependencies

- React Navigation
- React Native Reanimated
- React Native Gesture Handler
- React Native Vector Icons
- React Native Safe Area Context
- TypeScript

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)

---

Made with ❤️ by Ravi Tiwari
