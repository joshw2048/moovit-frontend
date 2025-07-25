import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'white' },
      }}>
      <Stack.Screen name="WorkoutsHomePage" />
      <Stack.Screen name="SignupPage" />
    </Stack>
  );
}
