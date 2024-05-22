import { View } from "react-native";
import { useTrending } from "@/lib/hooks/useTrendingMedia";
import MediaCarousel from "@/lib/components/MediaCarousel";
import { useLocalSearchParams } from "expo-router";

export default function App() {
  const { mediaType } = useLocalSearchParams();
  const trending = useTrending(`${mediaType}`.startsWith("movie") ? "movie" : "tv");
  return (
    <View className="flex-1">
      <MediaCarousel data={trending} title={mediaType} />
    </View>
  );
}
