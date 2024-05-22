import { ScrollView } from "react-native";
import { Link } from "expo-router";
import { useTrending } from "@/lib/hooks/useTrendingMedia";
import { useTopic } from "@/lib/hooks/useTopic";
import MediaCarousel from "@/lib/components/MediaCarousel";

export default function App() {
  const trending = useTrending("movie");
  const popular = useTopic("movie", "popular");
  const upcoming = useTopic("movie", "upcoming");
  return (
    <ScrollView className="flex-1">
      <MediaCarousel
        data={trending}
        title={<Link href="/movies">Movies</Link>}
      />
      <MediaCarousel
        data={popular}
        title={<Link href="/movies">Popular Movies</Link>}
      />
      <MediaCarousel
        data={upcoming}
        title={<Link href="/movies">Upcoming Movies</Link>}
      />
    </ScrollView>
  );
}
