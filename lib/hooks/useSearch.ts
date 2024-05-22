import { useQuery } from "@tanstack/react-query";

export function useSearch(query: string | undefined) {
  const result = useQuery({
    staleTime: 1000 * 60 * 60 * 24,
    queryKey: ["search", query] as const,
    queryFn: async () => {
      const response = await fetch(`/api/search?query=${query || ''}`);
      return response.json();
    },
  });

  return result.data?.results || [];
}
