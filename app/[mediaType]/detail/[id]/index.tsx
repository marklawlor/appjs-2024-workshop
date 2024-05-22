import { useLocalSearchParams, Navigator } from "expo-router";
import { ScrollView, Platform } from "react-native";
import { useMedia } from "@/lib/hooks/useMedia";
import { MediaDetail } from "@/lib/components/MediaDetail";
import { MediaHero } from "@/lib/components/MediaHero";

export default function Detail() {
  const { mediaType, id } = useLocalSearchParams();
  if (typeof id !== "string") {
    return null;
  } else if (mediaType !== "movie" && mediaType !== "tv") {
    return null;
  }

  const media = useMedia({ id, mediaType });
  return (
    <ScrollView>
      <Navigator.Screen
        options={{ title: media?.title, headerShown: Platform.OS !== "web" }}
      />
      <MediaHero media={media} />
      <MediaDetail media={media} />
    </ScrollView>
  );
}
