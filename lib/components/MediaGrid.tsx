import { FlatList, View, Platform } from "react-native";

import { MediaCard } from "./MediaCard";

export default function MediaGrid<T extends Media>({ media }: { media: T[] }) {
  return (
    <View className="my-global">
      <FlatList
        data={media}
        numColumns={Platform.OS === "web" ? 1 : 3}
        renderItem={({ item }) => <MediaCard item={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerClassName="grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-2 px-global"
      />
    </View>
  );
}
