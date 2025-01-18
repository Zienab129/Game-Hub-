import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { Game } from "../entities/Game";

const gameAPI = new APIClient<Game>("/games");
const screenshotAPI = new APIClient<FetchResponse<Screenshot>>("/games");

export interface Screenshot {
  id: number;
  image: string;
}

const useGame = (slug: string) => {
  return useQuery({
    queryKey: ["game", slug],
    queryFn: () =>
      gameAPI.get(slug).then((game) =>
        screenshotAPI.get(`${slug}/screenshots`).then((data) => ({
          ...game,
          screenshots: data.results || [],
        }))
      ),
    enabled: !!slug,
  });
};

export default useGame;
