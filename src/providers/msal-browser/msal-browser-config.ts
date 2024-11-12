import { EventType, PublicClientApplication } from '@azure/msal-browser';
import { t } from 'i18next';

import { authStore } from 'store';

import type { MsalLoginRequestProps, MsalRefreshRequestProps, MsalSignOutRequestProps } from './msal-browser-types';
import type { AuthenticationResult, Configuration } from '@azure/msal-browser';

const { MSAL_AUTHORITY_POLICY, MSAL_AUTHORITY_TENANT_ID, MSAL_CLIENT_ID } = process.env;

const { setLogin, setLogout } = authStore.getState();

export const MSAL_AUTHORITY = `https://${MSAL_AUTHORITY_POLICY}/${MSAL_AUTHORITY_TENANT_ID}`;

export const msalConfig: Configuration = {
  auth: {
    clientId: MSAL_CLIENT_ID,
    authority: MSAL_AUTHORITY,
    redirectUri: '/',
    postLogoutRedirectUri: '/',
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: false,
  },
};

export const msalScopes = {
  login: {
    scopes: ['openid', 'profile', 'email'],
  },
  refresh: {
    scopes: [`api://${MSAL_CLIENT_ID}/access_as_user`],
  },
};

export const msalEvents = [
  EventType.LOGIN_SUCCESS,
  EventType.ACQUIRE_TOKEN_SUCCESS,
  EventType.SSO_SILENT_SUCCESS,
] as EventType[];

export const msalInstance = new PublicClientApplication(msalConfig);

msalInstance.initialize();

msalInstance.enableAccountStorageEvents();

msalInstance.addEventCallback((event) => {
  const { eventType, payload } = event;
  const { account } = (payload || {}) as AuthenticationResult;

  if (msalEvents.includes(eventType) && account) {
    msalInstance.setActiveAccount(account);
  }
});

export async function msalLoginRequest(props?: MsalLoginRequestProps) {
  const { onLoginSuccess, onLoginFailure } = props || {};

  try {
    const auth = await msalInstance.loginPopup(msalScopes.refresh);

    const activeAccount = msalInstance.getActiveAccount();

    onLoginSuccess?.({ auth, activeAccount });
    setLogin(auth);
  } catch (error) {
    onLoginFailure?.(error as Error);
  }
}

export async function msalRefreshRequest(props?: MsalRefreshRequestProps) {
  const { onRefreshFailure, onRefreshSuccess } = props || {};

  try {
    const activeAccount = msalInstance.getActiveAccount();

    if (!activeAccount) {
      throw new Error(t('providers.msal-browser.no-active-account'));
    }

    const auth = await msalInstance.acquireTokenSilent(msalScopes.refresh);

    onRefreshSuccess?.({ auth, activeAccount });
    setLogin(auth);
  } catch (error) {
    onRefreshFailure?.(error as Error);
  }
}

export async function msalSignOutRequest(props?: MsalSignOutRequestProps) {
  const { onSignOutFailure, onSignOutSuccess } = props || {};

  try {
    const account = msalInstance.getActiveAccount();

    if (!account) {
      throw new Error(t('providers.msal-browser.no-active-account'));
    }

    msalInstance.logoutRedirect({ idTokenHint: account.idToken, account });

    onSignOutSuccess?.();
    setLogout();
  } catch (error) {
    onSignOutFailure?.(error as Error);
  }
}
