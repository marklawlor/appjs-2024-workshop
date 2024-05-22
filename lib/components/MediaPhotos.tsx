import { Image } from "expo-image";
import { Text, View } from "react-native";

export function MediaPhotos({ media }: { media?: Media }) {
  if (!media) return null;

  return (
    <View className="px-global">
      {media.images?.backdrops?.length! > 0 && (
        <View>
          <Text className="text-xl mb-5 inline-block">Backdrops</Text>
          <Text className="ml-2 text-white/60">
            {media.images?.backdrops.length} Images
          </Text>

          <View className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
            {media.images?.backdrops.map((image) => (
              <Image
                key={image.file_path}
                source={`https://image.tmdb.org/t/p/w500${image.file_path}`}
                alt=""
                className="flex flex-1 aspect-[16/9]"
              />
            ))}
          </View>
        </View>
      )}

      {media.images?.posters.length! > 0 && (
        <View className="mt-12">
          <Text className="text-xl mb-5 inline-block">Posters</Text>
          <Text className="ml-2 text-white/60">
            {media.images?.posters.length} Images
          </Text>

          <View className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
            {media.images?.posters.map((image) => (
              <View key={image.file_path} className="aspect-[2/3]">
                <Image
                  key={image.file_path}
                  source={`https://image.tmdb.org/t/p/w500${image.file_path}`}
                  alt=""
                  className="flex flex-1 aspect-[16/9]"
                />
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
  );
}
