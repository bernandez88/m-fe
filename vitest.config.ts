import { loadEnv } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';
import zod from 'zod';

import { environmentLoader } from './plugins';

import type { CoverageReporter } from 'vitest/node';

const exclude = ['**/node_modules/**', '**/build/**', '**/dist/**', '**/.{git,cache,output,temp}/**'];

const envSchema = zod.object({
  COVERAGE_BRANCHES_THRESHOLD: zod.coerce.number(),
  COVERAGE_FUNCTIONS_THRESHOLD: zod.coerce.number(),
  COVERAGE_LINES_THRESHOLD: zod.coerce.number(),
  COVERAGE_REPORTER: zod.coerce.string(),
  COVERAGE_STATEMENTS_THRESHOLD: zod.coerce.number(),
  COVERAGE_THRESHOLD_PER_FILE: zod.coerce.boolean(),
});

export default defineConfig(({ mode }) => {
  const {
    COVERAGE_BRANCHES_THRESHOLD = '80',
    COVERAGE_FUNCTIONS_THRESHOLD = '80',
    COVERAGE_LINES_THRESHOLD = '80',
    COVERAGE_REPORTER = 'lcov|http',
    COVERAGE_STATEMENTS_THRESHOLD = '80',
    COVERAGE_THRESHOLD_PER_FILE = 'false',
  } = loadEnv(mode, process.cwd(), '');

  envSchema.parse({
    COVERAGE_BRANCHES_THRESHOLD,
    COVERAGE_FUNCTIONS_THRESHOLD,
    COVERAGE_LINES_THRESHOLD,
    COVERAGE_REPORTER,
    COVERAGE_STATEMENTS_THRESHOLD,
    COVERAGE_THRESHOLD_PER_FILE,
  });

  const reporter = COVERAGE_REPORTER.split('|') as CoverageReporter[];

  return {
    plugins: [tsConfigPaths(), environmentLoader({ prefix: ['REACT_APP'] })],
    test: {
      testTimeout: 30_000,
      useAtomics: true,
      globals: true,
      css: true,
      environment: 'jsdom',
      setupFiles: ['./src/tests/setup.ts'],
      include: ['./src/{components,hooks,utils}/**/*{.,-}test.{ts,tsx}'],
      coverage: {
        reporter,
        perFile: COVERAGE_THRESHOLD_PER_FILE === 'true',
        branches: Number(COVERAGE_BRANCHES_THRESHOLD),
        functions: Number(COVERAGE_FUNCTIONS_THRESHOLD),
        lines: Number(COVERAGE_LINES_THRESHOLD),
        statements: Number(COVERAGE_STATEMENTS_THRESHOLD),
        include: ['**/src/{components,hooks,utils}/**/*{.,-}{ts,tsx}'],
        exclude: [...exclude, '**/{*-test,*-types,index}.{ts,tsx}'],
      },
      exclude,
    },
  };
});
