import { create } from "zustand";

type State = {
  favoriteIds: number[];
  toggleFavorite: (id: number) => void;
};

const useFavorites = create<State>()((set) => ({
  favoriteIds: [],
  toggleFavorite: (id) =>
    set((state) => ({
      favoriteIds: state.favoriteIds.includes(id)
        ? state.favoriteIds.filter((x) => x !== id)
        : [...state.favoriteIds, id],
    })),
}));

export default useFavorites;
