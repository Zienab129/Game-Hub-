import { Genre } from "./Genre";
import { Platform } from "./Platform";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
