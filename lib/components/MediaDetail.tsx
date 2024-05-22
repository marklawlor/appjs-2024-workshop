import {
  directors,
  formatContent,
  fullDate,
  fullLang,
  numberWithCommas,
  runtime,
} from "@/lib/tmdb/utils";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";

export function MediaDetail({ media }: { media?: Media }) {
  const type = media?.name ? "tv" : "movie";

  const details = [
    {
      title: "First Aired",
      value: media?.first_air_date ? fullDate(media?.first_air_date) : null,
      type: "tv",
    },
    {
      title: "Last Aired",
      value: media?.last_air_date ? fullDate(media?.last_air_date) : null,
      type: "tv",
    },
    {
      title: "Runtime",
      value: media?.episode_run_time?.length
        ? runtime(media?.episode_run_time[0])
        : null,
      type: "tv",
    },
    {
      title: "Released",
      value: media?.release_date ? fullDate(media?.release_date) : null,
      type: "movie",
    },
    {
      title: "Seasons",
      value: media?.number_of_seasons,
      type: "tv",
    },
    {
      title: "Episodes",
      value: media?.number_of_episodes,
      type: "tv",
    },
    {
      title: "Runtime",
      value: media?.runtime ? runtime(media?.runtime) : null,
      type: "movie",
    },
    {
      title: "Director",
      value: media?.credits?.crew
        ? directors(media)?.map((p) => (
            <Link
              key={p.id}
              href={`/person/detail/${p.id}`}
              className="text-blue-500 underline"
            >
              {p.name}
            </Link>
          ))
        : null,
      type: "movie",
    },
    {
      title: "Budget",
      value: media?.budget ? "$" + numberWithCommas(media?.budget) : null,
      type: "movie",
    },
    {
      title: "Revenue",
      value: media?.revenue ? "$" + numberWithCommas(media?.revenue) : null,
      type: "movie",
    },
    {
      title: "Creator",
      value: media && media.created_by?.length > 0 && (
        <View>
          {media.created_by?.map((p) => (
            <Link
              key={p.id}
              href={`/person/detail/${p.id}`}
              className="text-blue-500 underline"
            >
              {p.name}
            </Link>
          ))}
        </View>
      ),
      type: "tv",
    },
    {
      title: "Status",
      value: media?.status,
      type: "tv",
    },
    {
      title: "Genre",
      value: (
        <View>
          {media?.genres?.map((g) => (
            <Link
              key={g.id}
              href={`/${type}/genre/${g.id}`}
              className="text-blue-500 underline"
            >
              {g.name}
            </Link>
          ))}
        </View>
      ),
      type: "tv&movie",
    },
    {
      title: "Language",
      value: fullLang(media?.original_language),
      type: "tv&movie",
    },
    {
      title: "Network",
      value: media?.networks?.map((network) => network.name).join(", "),
      type: "tv",
    },
    {
      title: "Production",
      value: media?.production_companies
        ?.map((company) => company.name)
        .join(", "),
      type: "tv&movie",
    },
  ];

  return (
    <View className="flex flex-grow">
      <View className="px-global pb-6 flex-row">
        <View className="aspect-[2/3] max-w-[350px] flex-shrink-0 mr-12 hidden lg:block">
          {media?.poster_path ? (
            <Image
              className="w-full h-full object-cover p-1 bg-zinc-800"
              source={`https://image.tmdb.org/t/p/w500${media?.poster_path}`}
              alt=""
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
        </View>
        <View className="flex-1 my-global">
          <Text className="text-2xl font-bold mb-4">Storyline</Text>
          <Text className="mb-8 text-base max-w-3xl">
            {formatContent(media?.overview)}
          </Text>

          <View>
            {details.map((detail) =>
              detail.type.includes(type) && detail.value ? (
                <View className="flex mt-1 flex-row" key={detail.title}>
                  <Text className="min-w-[120px] font-bold">
                    {detail.title}:
                  </Text>
                  <Text className="flex flex-wrap gap-2 text-base min-w-0">
                    {detail.value}
                  </Text>
                </View>
              ) : null
            )}
          </View>
        </View>
      </View>
    </View>
  );
}
