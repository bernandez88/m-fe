import antfu from '@antfu/eslint-config';
import cspell from '@cspell/eslint-plugin/configs';
import query from '@tanstack/eslint-plugin-query';
import vitest from '@vitest/eslint-plugin';
import dotenv from 'dotenv';
import jestDom from 'eslint-plugin-jest-dom';
import promise from 'eslint-plugin-promise';
import security from 'eslint-plugin-security';
import sonarjs from 'eslint-plugin-sonarjs';
import testing from 'eslint-plugin-testing-library';
import globals from 'globals';

const { parsed } = dotenv.config();

const { NODE_ENV = 'production' } = parsed || {};

const isProd = NODE_ENV === 'production';

export default antfu(
  {
    react: true,
    isInEditor: false,
    ignores: ['dist', 'node_modules'],
    languageOptions: {
      globals: {
        ...globals.es2025,
        ...globals.node,
      },
    },
    rules: {
      'antfu/consistent-list-newline': ['off'],
      'arrow-body-style': ['off'],
      curly: ['error', 'all'],
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      'import/extensions': [
        'error',
        {
          config: 'ignorePackages',
          types: 'ignorePackages',
          styles: 'ignorePackages',
          json: 'ignorePackages',
          tsx: 'never',
        },
      ],
      'no-console': [isProd ? 'error' : 'warn'],
      'no-param-reassign': [
        'error',
        {
          props: false,
        },
      ],
      'no-restricted-exports': [
        'error',
        {
          restrictedNamedExports: [],
        },
      ],
      'no-restricted-syntax': [
        'error',
        {
          selector: 'FunctionExpression',
        },
      ],
      'no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
        },
      ],
      'node/prefer-global/process': ['off'],
      'perfectionist/sort-imports': [
        'error',
        {
          groups: ['builtin', 'react', 'external', 'internal', 'parent', 'sibling', 'index', 'type', 'object'],
          internalPattern: [
            'assets',
            'assets/**',
            'auth',
            'auth/**',
            'components',
            'components/**',
            'config',
            'config/**',
            'constants',
            'constants/**',
            'hooks',
            'hooks/**',
            'layout',
            'layout/**',
            'locales/**',
            'pages',
            'pages/**',
            'providers',
            'providers/**',
            'router',
            'router/**',
            'services',
            'services/**',
            'store',
            'store/**',
            'tests',
            'tests/**',
            'types',
            'types/**',
            'utils',
            'utils/**',
          ],
          customGroups: {
            value: {
              react: ['react'],
            },
            type: {
              react: ['react'],
            },
          },
        },
      ],
      'react/jsx-props-no-spreading': ['off'],
      'react/require-default-props': ['off'],
      'react/react-in-jsx-scope': ['off'],
      'style/arrow-parens': ['error', 'always'],
      'style/brace-style': ['error', '1tbs'],
      'style/indent': ['off'],
      'style/jsx-newline': ['error'],
      'style/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'semi',
          },
        },
      ],
      'style/padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: [
            'case',
            'const',
            'for',
            'function',
            'if',
            'let',
            'multiline-const',
            'multiline-expression',
            'multiline-let',
            'switch',
            'try',
            'while',
          ],
          next: ['*'],
        },
        {
          blankLine: 'always',
          prev: ['*'],
          next: [
            'case',
            'const',
            'for',
            'function',
            'if',
            'let',
            'multiline-const',
            'multiline-expression',
            'multiline-let',
            'switch',
            'try',
            'while',
          ],
        },
        {
          blankLine: 'any',
          prev: ['const', 'let'],
          next: ['const', 'let'],
        },
        {
          blankLine: 'always',
          prev: ['*'],
          next: ['return'],
        },
      ],
      'style/indent-binary-ops': ['off'],
      'style/quote-props': ['error', 'as-needed'],
      'style/quotes': ['error', 'single'],
      'style/jsx-closing-bracket-location': ['off'],
      'style/multiline-ternary': ['off'],
      'style/semi': ['error', 'always'],
      'ts/consistent-type-definitions': ['off'],
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
          ignore: ['README'],
        },
      ],
      'unicorn/no-array-reduce': ['off'],
      'unicorn/no-array-for-each': ['off'],
      'unicorn/no-null': ['off'],
      'unicorn/no-useless-undefined': ['off'],
      'unicorn/prefer-export-from': [
        'error',
        {
          ignoreUsedVariables: true,
        },
      ],
      'unicorn/prefer-node-protocol': ['off'],
      'unicorn/prevent-abbreviations': ['off'],
    },
    settings: {
      tailwindcss: {
        config: './tailwind.config.ts',
        cssFiles: [],
      },
      jest: {
        version: 29,
      },
      react: {
        pragma: 'React',
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      promise,
      sonarjs,
      security,
    },
    rules: {
      ...promise.configs['flat/recommended'].rules,
      ...sonarjs.configs.recommended.rules,
      ...security.configs.recommended.rules,
      'security/detect-object-injection': ['off'],
      'sonarjs/cognitive-complexity': ['error', 64],
      'sonarjs/no-duplicate-string': [
        'error',
        {
          threshold: 8,
        },
      ],
      'sonarjs/no-identical-functions': ['error', 8],
      'sonarjs/todo-tag': ['off'],
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    ...cspell.recommended,
    rules: {
      ...cspell.recommended.rules,
      '@cspell/spellchecker': [
        'error',
        {
          configFile: './cspell.json',
        },
      ],
    },
  },
  {
    files: ['**/plugins/**', '**/scripts/**'],
    rules: {
      'node/prefer-global/buffer': ['off'],
      'security/detect-non-literal-fs-filename': ['off'],
      'sonarjs/os-command': ['off'],
      'sonarjs/no-os-command-from-path': ['off'],
    },
  },
  {
    files: ['**/*{.,-}test.{ts,tsx}', '**/setup.ts'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...vitest.environments.env.globals,
      },
    },
    plugins: {
      'jest-dom': jestDom,
      'testing-library': testing,
    },
    rules: {
      ...jestDom.configs['flat/recommended'].rules,
      ...testing.configs['flat/react'].rules,
      ...vitest.configs.recommended.rules,
      'react/no-create-ref': ['off'],
      'react-refresh/only-export-components': ['off'],
      'testing-library/no-node-access': [
        'error',
        {
          allowContainerFirstChild: true,
        },
      ],
    },
  },
  query.configs['flat/recommended'],
);
