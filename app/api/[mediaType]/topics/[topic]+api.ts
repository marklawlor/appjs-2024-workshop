import { getQuery } from '@/lib/tmdb';

export async function GET(_request, { mediaType, topic }) {
  const data = await getQuery({
    type: mediaType,
    query: topic,
    title: '',
  });
  return Response.json(data);
}
