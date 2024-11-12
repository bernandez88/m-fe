import { t } from 'i18next';

import { base64 } from '../base64';

import type { ParseJWT, ParseJWTHeader, ParseJWTPayload, ParseJWTSignature } from './parse-jwt-types';

/**
 * Parses a JSON Web Token (JWT) and returns the decoded parts.
 *
 * @template T - The type of the payload in the JWT.
 * @param {string} token - The JWT to parse.
 * @returns {ParseJWT<T>} - An object containing the decoded parts of the JWT or an error if the JWT is invalid.
 */
function parseJWT<T>(token: string): ParseJWT<T> {
  const parts = String(token).split('.');

  if (parts.length !== 3) {
    return {
      error: new Error(t('utils.parse-jwt.invalid-jwt')),
    };
  }

  const header = base64.decode<ParseJWTHeader>(parts[0]);
  const payload = base64.decode<ParseJWTPayload<T>>(parts[1]);
  const signature = base64.decode<ParseJWTSignature>(parts[2]);

  if (typeof header === 'string' || header === null) {
    return {
      error: new Error(t('utils.parse-jwt.invalid-header')),
    };
  }

  if (typeof payload === 'string' || payload === null) {
    return {
      error: new Error(t('utils.parse-jwt.invalid-payload')),
    };
  }

  const expired = typeof payload.exp === 'number' ? Date.now() > payload.exp * 1000 : undefined;

  return {
    header,
    payload,
    signature,
    expired,
  };
}

export default parseJWT;
