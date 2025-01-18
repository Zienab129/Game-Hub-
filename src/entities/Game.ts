import { Platform } from "./Platform";
import { Genre } from "./Genre";

export interface Game {
  id: number;
  slug: string;
  name: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  genres: Genre[];
  publishers: Publisher[];
  released: string;
  isFavorite?: boolean;
}

interface Publisher {
  id: number;
  name: string;
}
