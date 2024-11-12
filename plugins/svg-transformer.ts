import fs from 'node:fs';

import { transform } from '@svgr/core';
import jsx from '@svgr/plugin-jsx';
import { transformWithEsbuild } from 'vite';

import type { Plugin } from 'vite';

/**
 * Transform SVG files into React Functional component and base64 string.
 * @file *.svg?base64 - returns base64 string.
 * @file *.svg?jsx - returns React Functional component.
 * @returns Vite plugin.
 */
export function svgTransformer(props?: Partial<Plugin>): Plugin {
  return {
    name: 'vite-plugin-svg-transformer',
    enforce: 'pre',
    apply: () => true,
    transform: async (code, id) => {
      if (id.endsWith('.svg?base64')) {
        const file = id.replace(/\?base64$/, '');

        try {
          const content = fs.readFileSync(file, 'utf8');

          const base64 = Buffer.from(content).toString('base64');

          return `export default 'data:image/svg+xml;base64,${base64}'`;
        } catch {
          return code;
        }
      }

      if (id.endsWith('.svg?jsx')) {
        const file = id.replace(/\?jsx$/, '');

        try {
          const content = fs.readFileSync(file, 'utf8');

          const componentCode = await transform(content, undefined, {
            filePath: id,
            caller: {
              defaultPlugins: [jsx],
            },
          });

          return await transformWithEsbuild(componentCode, id, {
            loader: 'jsx',
          });
        } catch {
          return code;
        }
      }

      return code;
    },
    ...props,
  };
}

export default svgTransformer;
