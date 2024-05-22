import { View } from "react-native";
import { Link } from "expo-router";
import { useTrending } from "@/lib/hooks/useTrendingMedia";
import MediaCarousel from "@/lib/components/MediaCarousel";

export default function App() {
  const trending = useTrending("movie");
  return (
    <View className="flex-1">
      <MediaCarousel
        data={trending}
        title={<Link href="/movies">Movies</Link>}
      />
    </View>
  );
}
