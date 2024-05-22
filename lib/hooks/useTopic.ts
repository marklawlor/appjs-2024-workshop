import { useQuery } from "@tanstack/react-query";

export function useTopic(mediaType: MediaType, topic: string) {
  const query = useQuery({
    staleTime: 1000 * 60 * 60 * 24,
    queryKey: ["topic", mediaType, topic] as const,
    queryFn: async () => {
      const response = await fetch(`/api/${mediaType}/topics/${topic}`);
      return response.json();
    },
  });

  return query.data?.results || [];
}
