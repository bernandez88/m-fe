export type ParseJWTHeader = {
  alg: string;
  typ?: string;
};

export type ParseJWTPayload<T> = Partial<T> & {
  iss?: string;
  sub?: string;
  aud?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  typ?: string;
};

export type ParseJWTSignature = string | null;

export type ParseJWT<TPayload> =
  | {
      error: Error;
      header?: undefined;
      payload?: undefined;
      signature?: undefined;
      expired?: undefined;
    }
  | {
      header: ParseJWTHeader;
      payload: ParseJWTPayload<TPayload>;
      signature: ParseJWTSignature;
      error?: undefined;
      expired?: boolean;
    };
