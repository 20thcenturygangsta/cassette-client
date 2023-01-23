import { Color } from 'types';
import create from 'zustand';
import { persist } from 'zustand/middleware';

interface ColorStore {
  tapeColor: Color;
  setTapeColor: (tapeColor: Color) => void;
}

interface UserStore {
  userNickname: string;
  tapename: string;
  setUserData: (userNickname: string, tapename: string) => void;
}

export const useColorStore = create<ColorStore>()(
  persist((set) => ({
    tapeColor: 'cassette_orange',
    setTapeColor: (value) => {
      set(() => ({ tapeColor: value }));
    },
  })),
);

export const useUserStore = create<UserStore>()(
  persist((set) => ({
    userNickname: '',
    tapename: '',
    setUserData: (userNickname, tapename) => {
      set(() => ({ userNickname, tapename }));
    },
  })),
);
