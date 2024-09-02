import { create } from 'zustand';
import { langEng, Languages } from '../assets/translations';

interface Store {
  marks: string[];
  language: Languages;
  players: string[];
  updatePlayers: (updatedUsers: string[]) => void;
  updateLanguage: (updatedLanguage: Languages) => void;
}

export const useStore = create<Store>((set) => ({
  marks: ['X', 'O'],
  language: langEng,
  players: [langEng.playerOne, langEng.playerTwo],
  updatePlayers: (updatedUsers: string[]) => set({ players: updatedUsers }),
  updateLanguage: (updatedLanguage: Languages) =>
    set({ language: updatedLanguage }),
}));
