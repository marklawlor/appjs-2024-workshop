import { View } from "react-native";
import { Link } from "expo-router";
import { useTrending } from "@/lib/hooks/useTrendingMedia";
import MediaCarousel from "@/lib/components/MediaCarousel";
import { SignIn } from "@/lib/components/SignIn";

export default function App() {
  const trending = useTrending("movie");
  return (
    <View className="flex-1">
      <MediaCarousel
        data={trending}
        title={<Link href="/movies">Movies</Link>}
      />
      <Link href="/sign-in">Sign In</Link>
    </View>
  );
}
