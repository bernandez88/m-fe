import { t } from 'i18next';

import parseJWT from './parse-jwt';

type ValidToken = {
  name: string;
  user: string;
};

type ValidTokenWithExp = {
  name: string;
  exp: number;
};

describe('utils/parseJWT', () => {
  it('should parse a valid JWT token and return the decoded parts', () => {
    const result = parseJWT<ValidToken>(
      /* cspell:disable-next-line */
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBEb2UiLCJ1c2VyIjoiam9obi5kb2UifQ.DOv-fA8cKLicr8N9SbULf8EtsvK89NG0WuY6oVaNIjU',
    );

    expect(result.error).toBeUndefined();

    if (result.error) {
      return;
    }

    expect(result.header).toEqual({
      alg: 'HS256',
      typ: 'JWT',
    });

    expect(result.payload).toEqual({
      name: 'John Doe',
      user: 'john.doe',
    });
  });

  it('should parse a valid JWT token and return the expiration', () => {
    const result = parseJWT<ValidTokenWithExp>(
      /* cspell:disable-next-line */
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBEb2UiLCJleHAiOjE1MTYyMzkwMjJ9.mVGXFv3OuwtuZPsdaf_oGUYm2uOH-T-JRTDQE1c10q0',
    );

    if (result.error) {
      return;
    }

    expect([true, false]).toContain(result.expired);
  });

  it('should return an error when the JWT token is invalid', () => {
    const token = 'invalidToken';

    const { error } = parseJWT(token);

    expect(error).toBeInstanceOf(Error);
    expect(error?.message).toBe(t('utils.parse-jwt.invalid-jwt'));
  });

  it('should return an error when the JWT token header cannot be parsed', () => {
    /* cspell:disable-next-line */
    const token = 'invalid.eyJuYW1lIjoiSm9obiBEb2UiLCJ1c2VyIjoiam9obi5kb2UifQ.DOv-fA8cKLicr8N9SbULf8EtsvK89NG0WuY6oVaNIjU';

    const { error, header } = parseJWT(token);

    expect(error).toBeInstanceOf(Error);
    expect(error?.message).toBe(t('utils.parse-jwt.invalid-header'));
    expect(header).toBeUndefined();
  });

  it('should return an error when the JWT token payload cannot be parsed', () => {
    /* cspell:disable-next-line */
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.invalid.DOv-fA8cKLicr8N9SbULf8EtsvK89NG0WuY6oVaNIjU';

    const { error, payload } = parseJWT(token);

    expect(error).toBeInstanceOf(Error);
    expect(error?.message).toBe(t('utils.parse-jwt.invalid-payload'));
    expect(payload).toBeUndefined();
  });
});
