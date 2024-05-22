import { getSearch } from '@/lib/tmdb';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const query = url.searchParams.get('query') || '';
  const data = await getSearch(query);
  return Response.json(data);
}
