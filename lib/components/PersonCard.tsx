import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { Text, View } from "react-native";
// import { PiQuestion } from "react-icons/pi";

export function PersonCard({ item: person }: { item: Person }) {
  return (
    <Link
      href={`/person/detail/${person.id}`}
      className="aspect-[2/3] flex flex-1 flex-col"
    >
      {person.profile_path ? (
        <Image
          source={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
          alt=""
          className="flex flex-1 aspect-[2/3]"
        />
      ) : (
        <View className="flex flex-1 aspect-[2/3] bg-zinc-800 items-center justify-center">
          <MaterialIcons
            name="question-mark"
            className="text-zinc-500 border-zinc-500 rounded-full border-2"
            size={35}
          />
        </View>
      )}
      <View className="mt-2">
        <Text className="truncate">{person.name}</Text>
        <Text className="text-sm truncate">{person.character}</Text>
      </View>
    </Link>
  );
}
