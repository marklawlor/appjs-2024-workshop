import { getGenre } from '@/lib/tmdb';

export async function GET(_request, { mediaType, genreId }) {
  const data = await getGenre(mediaType, genreId);
  return Response.json(data);
}
