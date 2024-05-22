import { useLocalSearchParams, Navigator } from "expo-router";
import { useMedia } from "@/lib/hooks/useMedia";
import { MediaDetail } from "@/lib/components/MediaDetail";

export default function Detail() {
  const { mediaType, id } = useLocalSearchParams();
  if (typeof id !== "string") {
    return null;
  } else if (mediaType !== "movie" && mediaType !== "tv") {
    return null;
  }

  const media = useMedia({ id, mediaType });
  return <MediaDetail media={media} />;
}
