import { useQuery } from "@tanstack/react-query";

export function useGenre(params: {
  mediaType: MediaType;
  genreId: string;
}) {
  const query = useQuery({
    staleTime: 1000 * 60 * 60 * 24,
    queryKey: ["genre", params.mediaType, params.genreId] as const,
    queryFn: async () => {
      const response = await fetch(`/api/${params.mediaType}/genre/${params.genreId}`);
      return response.json();
    },
  });

  return query.data?.results || [];
}
