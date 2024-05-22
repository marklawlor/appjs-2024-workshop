import { useEffect } from 'react';
import { Text } from 'react-native';
import { Slot, Redirect } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { AuthProvider, useAuth } from '@/lib/auth'

// TODO: Auth & Redirect
export default function App() {
  return <Slot />;
}
