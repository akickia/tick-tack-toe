import { create } from 'zustand';
import { langEng, Languages } from '../assets/translations';

interface Store {
  marks: string[];
  language: Languages;
  players: string[];
  currentIndex: number;
  updatePlayers: (updatedUsers: string[]) => void;
  updateCurrentIndex: (updatedIndex: number) => void;
  updateLanguage: (updatedLanguage: Languages) => void;
}

export const useStore = create<Store>((set) => ({
  marks: ['X', 'O'],
  language: langEng,
  players: [langEng.playerOne, langEng.playerTwo],
  currentIndex: 0 | 1,
  updatePlayers: (updatedUsers: string[]) => set({ players: updatedUsers }),
  updateCurrentIndex: (updatedIndex: number) =>
    set({ currentIndex: updatedIndex }),
  updateLanguage: (updatedLanguage: Languages) =>
    set({ language: updatedLanguage }),
}));
