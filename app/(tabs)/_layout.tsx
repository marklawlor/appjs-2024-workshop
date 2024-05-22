import { TabRouter } from "@react-navigation/native";
import { Navigator } from "expo-router";
import { View, StyleSheet } from "react-native";
import { Tabs } from "@/lib/components/Tabs";

export default function Layout() {
  return (
    <View style={StyleSheet.absoluteFill}>
      <Navigator router={TabRouter}>
        <Tabs>
          <Tabs.Screen name="index" icon="home" href="/" />
          <Tabs.Screen name="[mediaType]/index" icon="movie" href="/movie" />
          <Tabs.Screen name="[mediaType]/index" icon="tv" href="/tv" />
        </Tabs>
      </Navigator>
    </View>
  );
}
