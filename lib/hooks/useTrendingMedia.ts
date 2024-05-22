import { useQuery } from "@tanstack/react-query";

export function useTrending(mediaType: MediaType) {
  const query = useQuery({
    staleTime: 1000 * 60 * 60 * 24,
    queryKey: ["trending", mediaType] as const,
    queryFn: async () => {
      const response = await fetch(`/api/${mediaType}/trending`);
      return response.json();
    },
  });

  return query.data?.results || [];
}
