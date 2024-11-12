import zod from 'zod';

export const envSchema = zod.object({
  MSAL_CLIENT_ID: zod.string().uuid(),
  MSAL_AUTHORITY_TENANT_ID: zod.string().uuid(),
  MSAL_AUTHORITY_POLICY: zod.string(),
  PUBLIC_URL: zod.coerce.string(),
  REACT_APP_API_VERSION: zod.string().regex(/^v\d+$/g),
  REACT_APP_API_URL: zod.string().url(),
});

export default envSchema;
