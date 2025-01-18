import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { FetchResponse } from "../services/api-client";
import { Game } from "../entities/Game";
import { GameQuery } from "../entities/GameQuery";

const apiClient = new APIClient<Game>("/games");

const CACHE_TIME = ms("24h");
const STALE_TIME = ms("12h");
const PAGE_SIZE = 20;

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
          page_size: PAGE_SIZE,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: STALE_TIME,
    gcTime: CACHE_TIME,
  });

export default useGames;
