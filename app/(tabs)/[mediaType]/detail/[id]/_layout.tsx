import { TabRouter } from "@react-navigation/native";
import { Navigator, useLocalSearchParams } from "expo-router";
import { ScrollView, Platform } from "react-native";
import { MediaTabs } from "@/lib/components/MediaTabs";
import { MediaHero } from "@/lib/components/MediaHero";
import { useMedia } from "@/lib/hooks/useMedia";

export default function Layout() {
  const { mediaType, id } = useLocalSearchParams();
  const media = useMedia({ mediaType, id });
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <MediaHero media={media} />
      <Navigator router={TabRouter}>
        <MediaTabs>
          <MediaTabs.Screen
            name="Overview"
            href={`/${mediaType}/detail/${id}`}
          />
          <MediaTabs.Screen
            name="Photos"
            href={`/${mediaType}/detail/${id}/photos`}
          />
        </MediaTabs>
      </Navigator>
    </ScrollView>
  );
}


