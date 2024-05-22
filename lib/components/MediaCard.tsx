import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { View, Text } from "react-native";
import StarRating from "./StarRating";

export function MediaCard({
  item,
  width = 154,
}: {
  item: Media;
  width?: 92 | 154 | 185 | 342 | 500;
}) {
  const type = item.name ? "tv" : "movie";

  return (
    <Link href={`/${type}/detail/${item.id}`}>
      <View style={{ width }}>
        {item.poster_path ? (
          <Image
            source={`https://image.tmdb.org/t/p/w${width}${item.poster_path}`}
            alt=""
            style={{
              width,
              aspectRatio: "2/3",
            }}
          />
        ) : (
          <View className="flex flex-1 bg-zinc-800 items-center justify-center">
            <MaterialIcons
              name="question-mark"
              className="text-zinc-500 border-zinc-500 rounded-full border-2"
              size={35}
            />
          </View>
        )}
        <Text className="mt-1 truncate text-lg " key="a" numberOfLines={1}>
          {item.name || item.title}
        </Text>
        <View className="flex flex-row items-center gap-x-2">
          <StarRating average={item.vote_average} size={15} />
          <Text key="a" className="text-sm font-medium ">
            {item.vote_average.toFixed(1)}
          </Text>
        </View>
      </View>
    </Link>
  );
}
