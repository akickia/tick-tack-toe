import { create } from 'zustand';

interface Store {
  marks: string[];
  players: string[];
  updatePlayers: (updatedUsers: string[]) => void;
}
export const useStore = create<Store>((set) => ({
  marks: ['X', 'O'],
  players: ['Player 1', 'Player 2'],
  updatePlayers: (updatedUsers: string[]) => set({ players: updatedUsers }),
}));
