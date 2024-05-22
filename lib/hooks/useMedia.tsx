import { useQuery } from "@tanstack/react-query";

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
    queryFn: async () => {
      const response = await fetch(`/api/${mediaType}/media/${id}`);
      return response.json();
    },
  });

  return query.data;
}
