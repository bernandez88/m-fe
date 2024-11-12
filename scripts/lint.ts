import { execSync } from 'node:child_process';
import { exit } from 'node:process';
import { parseArgs } from 'node:util';

const {
  values: { fix },
} = parseArgs({
  options: {
    fix: {
      type: 'boolean',
      short: 'f',
      default: false,
    },
  },
});

const { isTTY } = process.stdout;

const color = {
  reset: isTTY ? '\u001B[0m' : '',
  red: isTTY ? '\u001B[31m' : '',
  green: isTTY ? '\u001B[32m' : '',
  yellow: isTTY ? '\u001B[33m' : '',
  blue: isTTY ? '\u001B[34m' : '',
  cyan: isTTY ? '\u001B[36m' : '',
  gray: isTTY ? '\u001B[90m' : '',
} as const;

try {
  const eslintVersion = execSync('eslint --version').toString().trim();
  const biomeVersion = execSync('biome --version').toString().trim()?.split(' ')?.[1];
  const tscVersion = execSync('tsc --version').toString().trim()?.split(' ')?.[1];

  const tscInitTime = performance.now();

  process.stdout.write(`${color.blue}> Typescript v${tscVersion} ${color.reset}`);
  execSync('tsc', { stdio: 'inherit' });

  const tscTotalTime = Number((performance.now() - tscInitTime).toFixed(0));

  process.stdout.write(`${color.blue}> Typescript done in: ${tscTotalTime}ms ${color.reset}\n`);

  const eslintInitTime = performance.now();

  process.stdout.write(`${color.blue}> Eslint ${eslintVersion} ${color.reset}`);
  execSync(`eslint ${fix ? '--fix' : ''} "./src/**/*.{ts,tsx}"`, { stdio: 'inherit' });

  const eslintTotalTime = Number((performance.now() - eslintInitTime).toFixed(0));

  process.stdout.write(`${color.blue}> Eslint done in: ${eslintTotalTime}ms ${color.reset}\n`);

  process.stdout.write(`${color.blue}> Biome v${biomeVersion} ${color.reset}`);
  execSync(`biome lint ${fix ? '--fix' : ''}`, { stdio: 'inherit' });
} catch (error) {
  process.stdout.write(`${color.red}> ${error} ${color.reset}`);

  exit(1);
}
