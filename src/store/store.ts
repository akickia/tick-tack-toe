import { create } from 'zustand';
import { langEng, langSwe, Languages } from '../assets/translations';

const localStorageLanguage = localStorage.getItem('language');
let language = langEng;
if (localStorageLanguage && localStorageLanguage === 'English') {
  language = langEng;
} else if (localStorageLanguage && localStorageLanguage === 'Swedish') {
  language = langSwe;
}

interface Store {
  marks: string[];
  language: Languages;
  players: string[];
  updatePlayers: (updatedUsers: string[]) => void;
  updateLanguage: (updatedLanguage: Languages) => void;
}

export const useStore = create<Store>((set) => ({
  marks: ['X', 'O'],
  language: language,
  players: [language.playerOne, language.playerTwo],
  updatePlayers: (updatedUsers: string[]) => set({ players: updatedUsers }),
  updateLanguage: (updatedLanguage: Languages) =>
    set({ language: updatedLanguage }),
}));
