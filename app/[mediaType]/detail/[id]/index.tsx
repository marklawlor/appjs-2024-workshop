import { useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native";
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
      <MediaHero media={media} />
      <MediaDetail media={media} />
    </ScrollView>
  );
}
