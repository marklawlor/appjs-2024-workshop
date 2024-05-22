import { useQuery } from "@tanstack/react-query";
import { getMedia } from "../tmdb";

export function useMedia({
  mediaType,
  id,
}: {
  mediaType: MediaType;
  id: string;
}) {
  const query = useQuery({
    staleTime: 1000 * 60 * 60 * 24,
    queryKey: [mediaType, id] as const,
    queryFn: () => getMedia(mediaType, id),
  });

  return query.data;
}
