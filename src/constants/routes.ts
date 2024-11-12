export const HOME = '/' as const;
export const CREATE_NEW_REVISION = '/create-new-revision' as const;
export const REVISION_LOG = '/revision-log' as const;
export const EMPTY = '/empty' as const;
export const LOGIN = '/login' as const;
export const SETUP = '/setup' as const;
export const PARAMETERS = '/parameters' as const;

export const PASSWORD = {
  FORGOT: '/forgot-password',
  RESET: '/reset-password',
} as const;

export const ROUTES = {
  HOME,
  CREATE_NEW_REVISION,
  REVISION_LOG,
  EMPTY,
  LOGIN,
  SETUP,
  PASSWORD,
  PARAMETERS,
} as const;

export default ROUTES;
