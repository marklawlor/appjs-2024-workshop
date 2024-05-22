import { Text, View } from "react-native";
import { getYear, runtime } from "@/lib/tmdb/utils";
import { Image } from "expo-image";
import StarRating from "./StarRating";

export function MediaHero({ media }: { media?: Media }) {
  if (!media) return null;

  const type = media.media_type || media.title ? "movie" : "tv";

  return (
    <View className="relative aspect-[1/1] lg:aspect-[4/2] xl:aspect-[16/6] border-b border-zinc-800 overflow-hidden flex-col">
      {media.backdrop_path ? (
        <Image
          source={`https://image.tmdb.org/t/p/w1280${media.backdrop_path}`}
          className="top-0 bottom-0 left-0 right-0 absolute object-cover"
          alt=""
        />
      ) : (
        <View className="w-full h-full bg-zinc-800" />
      )}
      <View className="absolute inset-0 bg-zinc-700 mix-blend-multiply" />
      <View className="absolute top-0 bottom-0 left-0 right-0 flex flex-col bg-black/40">
        <View className="px-global h-full flex flex-col justify-end lg:justify-center">
          <Text className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl md:text-5xl md:leading-tight lg:text-6xl line-clamp-2 lg:leading-tight">
            {media.title || media.name}
          </Text>
          <View className="mt-2 sm:mt-4 md:mt-6 flex flex-row gap-2 items-center justify-start">
            <StarRating average={media.vote_average} />
            <View className="flex flex-1 flex-row gap-2">
              {media.release_date && (
                <Text className="text-gray-300">
                  {getYear(media.release_date)}
                </Text>
              )}
              {media.runtime && (
                <Text className="text-gray-300">{runtime(media.runtime)}</Text>
              )}
              {media.number_of_seasons && (
                <Text className="text-gray-300">
                  Season {media.number_of_seasons}
                </Text>
              )}
              {media.first_air_date && (
                <Text className="text-gray-300">
                  {getYear(media.first_air_date)}
                </Text>
              )}
            </View>
          </View>
          <Text className="mt-2 sm:mt-4 md:mt-6 max-w-3xl text-2xl md:text-xl text-gray-300 line-clamp-3 mb-8 lg:mb-0">
            {media.tagline || ""}
          </Text>
        </View>
      </View>
    </View>
  );
}
