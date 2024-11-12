/* cspell:disable */

export type AccessTokenPayload = {
  aud: string;
  iss: string;
  iat: number;
  nbf: number;
  exp: number;
  acct: number;
  acr: string;
  aio: string;
  altsecid: string;
  amr: string[];
  app_displayname: string;
  appid: string;
  appidacr: string;
  email: string;
  idp: string;
  idtyp: string;
  ipaddr: string;
  name: string;
  oid: string;
  platf: string;
  puid: string;
  rh: string;
  scp: string;
  signin_state: string[];
  sub: string;
  tenant_region_scope: string;
  tid: string;
  unique_name: string;
  uti: string;
  ver: string;
  wids: string[];
  xms_idrel: string;
  xms_st: {
    sub: string;
  };
  xms_tcdt: number;
};
