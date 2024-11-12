import type { envSchema } from 'config/env';
import type zod from 'zod';

declare module 'constants' {
  export * from 'constants/index';
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends zod.infer<typeof envSchema> {}
  }

  interface Document {
    startViewTransition: (callback: () => void) => void;
  }
}
