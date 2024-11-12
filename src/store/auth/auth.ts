import dayjs from 'dayjs';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

import { LOCAL_STORAGE } from 'constants/default';
import { parseJWT } from 'utils';

import type { AuthenticationResult } from '@azure/msal-browser';
import type { AccessTokenPayload } from 'types/msal';

const { DEV } = process.env;

type Expiration = {
  accessToken: number;
};

type Time = {
  serverTime: number;
  clientTime: number;
  timeOffset: number;
  expiration: Expiration;
};

type Store = Partial<AuthenticationResult> & {
  isLogged: boolean;
  time?: Time;
};

export type AuthStore = Store & {
  setLogin: (data: AuthenticationResult) => void;
  setLogout: () => void;
};

function validateLogin(data: AuthenticationResult) {
  const { accessToken } = data;

  try {
    const access = accessToken ? parseJWT<AccessTokenPayload>(accessToken)?.payload : undefined;

    const clientTime = dayjs().unix();
    const serverTime = access?.iat || 0;

    const store = {
      ...data,
      isLogged: Boolean(access) && serverTime > 0,
      time: {
        clientTime,
        serverTime,
        timeOffset: clientTime - serverTime,
        expiration: {
          accessToken: access?.exp || 0,
        },
      },
    } as Partial<Store>;

    return store;
  } catch {
    return {
      isLogged: false,
    };
  }
}

export const initialAuthStore: Store = {
  accessToken: '',
  isLogged: false,
  time: {} as Time,
};

export const authStore = create<AuthStore>()(
  devtools(
    persist(
      (set) => {
        return {
          ...initialAuthStore,
          setLogin: (data) => {
            set(validateLogin(data), false, 'setLogin');
          },
          setLogout: () => {
            set(initialAuthStore, false, 'setLogout');
            localStorage.removeItem(LOCAL_STORAGE.AUTH);
          },
        };
      },
      {
        name: LOCAL_STORAGE.AUTH,
        storage: createJSONStorage(() => localStorage),
      },
    ),
    {
      name: 'auth',
      enabled: String(DEV) === 'true',
    },
  ),
);
