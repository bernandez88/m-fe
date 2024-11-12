import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import checkerPlugin from 'vite-plugin-checker';
import tsConfigPaths from 'vite-tsconfig-paths';
import zod from 'zod';

import { disableReactDeveloperTools, environmentLoader, svgTransformer } from './plugins';
import { envSchema } from './src/config/env';

const hostSchema = zod.object({
  HOST: zod.string().ip(),
  PORT: zod.coerce.number(),
});

export default defineConfig((config) => {
  const { command, mode } = config;

  const {
    MSAL_CLIENT_ID,
    MSAL_AUTHORITY_TENANT_ID,
    MSAL_AUTHORITY_POLICY,
    HOST = '127.0.0.1',
    NODE_ENV,
    OPEN_BROWSER = 'true',
    PORT = '3000',
    PUBLIC_URL,
    REACT_APP_API_URL,
    REACT_APP_API_VERSION,
    VITEST,
  } = loadEnv(mode, process.cwd(), '');

  hostSchema.merge(envSchema).parse({
    MSAL_CLIENT_ID,
    MSAL_AUTHORITY_TENANT_ID,
    MSAL_AUTHORITY_POLICY,
    HOST,
    PORT,
    REACT_APP_API_URL,
    REACT_APP_API_VERSION,
  });

  const isProd = command === 'build';
  const isTest = VITEST === 'true';

  return {
    base: PUBLIC_URL,
    publicDir: 'public',
    plugins: [
      environmentLoader({
        prefix: ['REACT_APP', 'MSAL'],
        additionalEnvs: {
          NODE_ENV: NODE_ENV || (isProd ? 'production' : 'development'),
          PUBLIC_URL,
        },
      }),
      isProd ? disableReactDeveloperTools() : undefined,
      isTest
        ? undefined
        : checkerPlugin({
            biome: {
              command: 'check',
            },
            eslint: {
              lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
              useFlatConfig: true,
            },
            overlay: {
              position: 'br',
              initialIsOpen: false,
            },
            enableBuild: true,
            typescript: true,
          }),
      react(),
      svgTransformer(),
      tsConfigPaths(),
    ].filter(Boolean),
    server: {
      open: OPEN_BROWSER === 'true',
      port: Number(PORT),
      host: HOST,
    },
  };
});
