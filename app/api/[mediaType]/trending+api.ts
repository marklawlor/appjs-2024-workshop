import { getTrending } from '@/lib/tmdb';

export async function GET(_request, { mediaType }) {
  const data = await getTrending(mediaType);
  return Response.json(data);
}
