import type { AccountInfo, AuthenticationResult } from '@azure/msal-browser';

export type MsalOnSuccess = {
  auth: AuthenticationResult;
  activeAccount: AccountInfo | null;
};

export type MsalLoginRequestProps = {
  onLoginSuccess?: (data: MsalOnSuccess) => void;
  onLoginFailure?: (error: Error) => void;
};

export type MsalRefreshRequestProps = {
  onRefreshSuccess?: (data: MsalOnSuccess) => void;
  onRefreshFailure?: (error: Error) => void;
};

export type MsalSignOutRequestProps = {
  onSignOutSuccess?: () => void;
  onSignOutFailure?: (error: Error) => void;
};
