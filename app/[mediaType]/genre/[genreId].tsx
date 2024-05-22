import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import MediaGrid from "@/lib/components/MediaGrid";
import { useGenre } from "@/lib/hooks/useGenre";

export default function GenreLayout() {
  const { mediaType, genreId } = useLocalSearchParams();
  const media = useGenre({ genreId, mediaType });
  return (
    <View className="flex-1">
      <MediaGrid media={media} />
    </View>
  );
}
