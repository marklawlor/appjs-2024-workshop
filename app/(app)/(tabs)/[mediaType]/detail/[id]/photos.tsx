import { MediaPhotos } from "@/lib/components/MediaPhotos";
import { useMedia } from "@/lib/hooks/useMedia";
import { useLocalSearchParams } from "expo-router";

export default function Photos() {
  const { mediaType, id } = useLocalSearchParams();
  if (typeof id !== "string") {
    return null;
  } else if (mediaType !== "movie" && mediaType !== "tv") {
    return null;
  }

  const media = useMedia({ id, mediaType });
  return <MediaPhotos media={media} />;
}
