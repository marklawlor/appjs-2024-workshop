import { useQuery } from "@tanstack/react-query";

export function usePerson(id: string) {
  const query = useQuery({
    staleTime: 1000 * 60 * 60 * 24,
    queryKey: ["person", id] as const,
    queryFn: async () => {
      const response = await fetch(`/api/person/${id}`);
      return response.json();
    },
  });

  return query.data;
}
