import { getMedia } from '@/lib/tmdb';

export async function GET(_request, { mediaType, id }) {
  const data = await getMedia(mediaType, id);
  return Response.json(data);
}
