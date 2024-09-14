import { create } from 'zustand';
import { langEng, Languages } from '../assets/translations';

interface Store {
  language: Languages;
  options: string[];
  isStarted: boolean;
  marks: string[];
  players: string[];
  currentIndex: number;
  updateLanguage: (updatedLanguage: Languages) => void;
  setIsStarted: (newIsStarted: boolean) => void;
  updatePlayers: (updatedUsers: string[]) => void;
  updateCurrentIndex: (updatedIndex: number) => void;
}

export const useStore = create<Store>((set) => ({
  language: langEng,
  options: ['computer', 'local', 'online'],
  isStarted: false,
  marks: ['X', 'O'],
  players: [langEng.playerOne, langEng.playerTwo],
  currentIndex: 0 | 1,
  updateLanguage: (updatedLanguage: Languages) =>
    set({ language: updatedLanguage }),
  setIsStarted: (newIsStarted: boolean) => set({ isStarted: newIsStarted }),
  updatePlayers: (updatedUsers: string[]) => set({ players: updatedUsers }),
  updateCurrentIndex: (updatedIndex: number) =>
    set({ currentIndex: updatedIndex }),
}));
