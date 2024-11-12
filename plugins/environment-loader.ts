import { loadEnv } from 'vite';

import type { Plugin } from 'vite';

export type EnvironmentLoaderOptions = {
  /**
   * Additional environment variables to load.
   */
  additionalEnvs?: Record<string, unknown>;
  /**
   * The directory to load environment variables from.
   * @default process.cwd()
   */
  dir?: string;
  /**
   * The mode to load environment variables for.
   */
  mode?: string;
  /**
   * The prefix to use when filtering environment variables.
   * - if is not provided, no variable will be filtered.
   */
  prefix?: string | string[];
};

/**
 * Vite plugin to make environment variables available in
 * - `process.env`
 * - `import.meta.env`
 *
 * @returns Vite plugin.
 */
export function environmentLoader(options?: EnvironmentLoaderOptions): Plugin {
  const { additionalEnvs, dir, mode: modeOption, prefix } = options || {};

  return {
    name: 'vite-plugin-environment',
    config: (config, env) => {
      const { base = '/', envDir, envPrefix } = config;
      const { mode: envMode, isSsrBuild } = env;

      const mode = modeOption || envMode;

      const processEnv = {
        ...loadEnv(mode, dir || envDir || process.cwd(), prefix || envPrefix),
        ...additionalEnvs,
      };

      const importMetaEnv: string[][] = [];

      for (const [key, value] of Object.entries(processEnv)) {
        importMetaEnv.push([`import.meta.env.${key}`, JSON.stringify(value)]);
      }

      return {
        define: {
          'process.env': {
            BASE_URL: base,
            MODE: mode,
            DEV: mode === 'development',
            PROD: mode === 'production',
            SSR: Boolean(isSsrBuild),
            NODE_ENV: mode,
            ...processEnv,
          },
          'import.meta.env.NODE_ENV': JSON.stringify(mode),
          ...Object.fromEntries(importMetaEnv),
        },
      };
    },
  };
}

export default environmentLoader;
