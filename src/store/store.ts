import { create } from 'zustand';

interface Store {
  marks: string[];
  players: string[];
  test: number;
  increaseTest: () => void;
  updatePlayers: (updatedUsers: string[]) => void;
}
export const useStore = create<Store>((set) => ({
  marks: ['0', 'X'],
  players: ['Player 1', 'Player 2'],
  test: 0,
  increaseTest: () => set((state) => ({ test: state.test + 1 })),
  updatePlayers: (updatedUsers: string[]) => set({ players: updatedUsers }),
}));
