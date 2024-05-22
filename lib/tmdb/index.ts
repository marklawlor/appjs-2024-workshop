export const apiUrl = "https://api.themoviedb.org/3";

export const apiImgUrl = "https://image.tmdb.org/t/p";

export const fetchApi = async (
  path: string,
  params: Record<string, string> = {}
) => {
  const api_key =
    process.env.EXPO_PUBLIC_TMDB_API_KEY || process.env.TMDB_API_KEY;

  if (!api_key) {
    throw new Error("TMDB API Key not set.");
  }

  const url = new URL(apiUrl);
  const searchParams = new URLSearchParams({
    ...params,
    api_key,
  });

  url.pathname += path;
  url.search = searchParams.toString();

  const resp = await fetch(url.toString());
  const data = await resp?.json();

  if (!resp.ok || !data) throw new Error("Network Error");

  return data;
};

export const getMedia = (type: MediaType, id: string): Promise<Media> =>
  fetchApi(`/${type}/${id}`, {
    append_to_response: "credits,images,videos,recommendations,episodes",
    include_image_language: "en",
  });

export const getRandomMedia = (items: Media[]): Promise<Media> => {
  const randomItem = items[Math.floor(Math.random() * items.length)];
  const randomItemType = randomItem.name ? "tv" : "movie";

  return getMedia(randomItemType, randomItem.id);
};

export const getMediaEpisodes = (id: string, season: number): Promise<Season> =>
  fetchApi(`/tv/${id}/season/${season}`);

export const getPerson = (id: string): Promise<Person> =>
  fetchApi(`/person/${id}`, {
    append_to_response: "combined_credits,images",
  });

export const getSearch = (
  query: string,
  page: number | string = 1
): Promise<PageResult<Media & Person>> =>
  fetchApi("/search/multi", {
    query,
    page: `${page}`,
  });

export const getTrending = (
  type: MediaType,
  page: number | string = 1
): Promise<PageResult<Media>> => {
  return fetchApi(`/trending/${type}/week`, {
    page: `${page}`,
  });
};

export const getQuery = (
  query: QueryItem,
  page: number | string = 1
): Promise<PageResult<Media>> =>
  fetchApi(`/${query.type}/${query.query}`, {
    page: `${page}`,
  });

export const getGenre = (
  mediaType: MediaType,
  id: string,
  page: number | string = 1
): Promise<PageResult<Media> & { name: string }> => {
  return Promise.all([
    fetchApi(`/discover/${mediaType}`, {
      page: `${page}`,
      with_genres: id,
    }),
    fetchApi(`/genre/${mediaType}/list`),
  ]).then(([media, genres]) => {
    return {
      ...media,
      name: genres.genres.find((g: any) => g.id.toString() === id)?.name,
    };
  });
};

export const getAvailableRegions = (): Promise<PageResult<Region>> =>
  fetchApi(`/watch/providers/regions`);

export const getProviders = (
  type: MediaType,
  id: string
): Promise<ProviderResult> => fetchApi(`/${type}/${id}/watch/providers`);
