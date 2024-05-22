import { useCallback } from "react";
import { View, ScrollView, TextInput } from "react-native";
import { useSearch } from "@/lib/hooks/useSearch";
import { useGlobalSearchParams, router } from 'expo-router';
import MediaCarousel from "@/lib/components/MediaCarousel";

export default function App() {
  const { query } = useGlobalSearchParams();
  const results = useSearch(query);

  const onChange = useCallback((query: string) => {
    router.setParams({ query });
  }, [router]);

  return (
    <ScrollView className="flex-1">
      <TextInput
        onChangeText={onChange}
        className="bg-white"
      />
      <MediaCarousel
        data={results}
        title="Search"
      />
    </ScrollView>
  );
}
