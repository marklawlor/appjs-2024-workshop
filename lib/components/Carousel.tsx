import { FlatList, FlatListProps, View, Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useCallback, useRef } from "react";

export type CarouselProps = {
  title: React.ReactNode | string;
  data: any[];
} & FlatListProps<any>;

export default function Carousel({ title, data, ...props }: CarouselProps) {
  const scrollContainer = useRef<FlatList>(null);
  const indexRef = useRef<number>(0);

  function scrollLeft() {
    scrollContainer.current?.scrollToIndex({
      index: Math.max(0, indexRef.current - 4),
    });
  }

  function scrollRight() {
    scrollContainer.current?.scrollToIndex({
      index: Math.min(data.length - 1, indexRef.current + 4),
    });
  }

  const onViewableItemsChanged = useCallback<
    NonNullable<FlatListProps<any>["onViewableItemsChanged"]>
  >(({ viewableItems }) => {
    indexRef.current = viewableItems[0]?.index ?? 0;
  }, []);

  return (
    <View className="my-global">
      <View className="px-global mb-1 flex flex-row items-center justify-start">
        {typeof title === "string" ? (
          <Text className="text-2xl font-bold">{title}</Text>
        ) : (
          title
        )}
      </View>
      <View>
        <FlatList
          data={data}
          ref={scrollContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          onViewableItemsChanged={onViewableItemsChanged}
          contentContainerClassName="gap-2 pl-2"
          {...props}
        />
        <Pressable
          className="native:hidden absolute left-0 lg:flex h-full opacity-0 bg-black/50 p-3 text-3xl items-center hover:opacity-100 transition justify-center"
          onPress={scrollLeft}
        >
          <MaterialIcons name="arrow-left" className="text-white" size={30} />
          <Text className="sr-only">Scroll left</Text>
        </Pressable>
        <Pressable
          className="native:hidden absolute right-0 lg:flex h-full opacity-0 bg-black/50 p-3 text-3xl items-center hover:opacity-100 transition justify-center"
          onPress={scrollRight}
        >
          <MaterialIcons name="arrow-right" className="text-white" size={30} />
          <Text className="sr-only">Scroll left</Text>
        </Pressable>
      </View>
    </View>
  );
}
