import { Stack } from "expo-router";
import { View } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StyleSheet } from "react-native";
import "@/lib/nativewind";

const queryClient = new QueryClient();

export default function AppLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={StyleSheet.absoluteFill}>
        <Stack screenOptions={{ title: "" }}>
          <Stack.Screen name="index" />
        </Stack>
      </View>
    </QueryClientProvider>
  );
}
