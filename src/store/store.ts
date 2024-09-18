import { create } from 'zustand';
import { langEng, Languages } from '../assets/translations';

interface Store {
  language: Languages;
  options: string[];
  chosenOption: string;
  isStarted: boolean;
  marks: string[];
  players: string[];
  currentIndex: number;
  updateLanguage: (updatedLanguage: Languages) => void;
  setChosenOption: (updatedOption: string) => void;
  setIsStarted: (newIsStarted: boolean) => void;
  updatePlayers: (updatedUsers: string[]) => void;
  updateCurrentIndex: (updatedIndex: number) => void;
}

export const useStore = create<Store>((set) => ({
  language: langEng,
  options: ['computer', 'locally', 'online'],
  chosenOption: 'locally',
  isStarted: false,
  marks: ['X', 'O'],
  players: [langEng.playerOne, langEng.playerTwo],
  currentIndex: 0 | 1,
  updateLanguage: (updatedLanguage: Languages) =>
    set({ language: updatedLanguage }),
  setChosenOption: (updatedOption: string) =>
    set({ chosenOption: updatedOption }),
  setIsStarted: (newIsStarted: boolean) => set({ isStarted: newIsStarted }),
  updatePlayers: (updatedUsers: string[]) => set({ players: updatedUsers }),
  updateCurrentIndex: (updatedIndex: number) =>
    set({ currentIndex: updatedIndex }),
}));
