import { Color } from 'types';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface ColorStore {
  tapeColor: Color;
  setTapeColor: (tapeColor: Color) => void;
}

interface UserStore {
  userNickname: string;
  tapename: string;
  setUserData: (userNickname: string, tapename: string) => void;
}

interface ResponseUserStore {
  userURL: string;
  tapeId: number;
  setResponsUser: (useURL: string, tapeId?: number) => void;
}

interface TokenStore {
  refreshToken: string;
  setToken: (refreshToken: string) => void;
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

export const useResponsUserStore = create<ResponseUserStore>()(
  persist((set) => ({
    userURL: '',
    tapeId: 0,
    setResponsUser: (userURL, tapeId) => {
      set(() => ({ userURL, tapeId }));
    },
  })),
);

export const tokenStore = create<TokenStore>()(
  devtools((set) => ({
    refreshToken: '',

    setToken: (refreshToken) => {
      set(() => ({ refreshToken }));
    },
  })),
);
