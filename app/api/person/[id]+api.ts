import { getPerson } from '@/lib/tmdb';

export async function GET(_request, { id }) {
  const data = await getPerson(id);
  return Response.json(data);
}
