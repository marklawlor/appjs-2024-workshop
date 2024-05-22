import { useQuery } from "@tanstack/react-query";
import { getTrending } from "../tmdb";

export function useTrending(mediaType: MediaType) {
  const query = useQuery({
    staleTime: 1000 * 60 * 60 * 24,
    queryKey: ["trending", mediaType] as const,
    queryFn: () => getTrending(mediaType),
  });

  return query.data?.results || [];
}
