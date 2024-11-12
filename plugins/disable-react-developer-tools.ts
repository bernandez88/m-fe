import type { Plugin } from 'vite';

/**
 * Disables React Developer Tools plugin.
 * This plugin replaces the global hook used by React Developer Tools with 'undefined',
 * effectively disabling the tools.
 *
 * @returns Vite plugin.
 */
export function disableReactDeveloperTools(): Plugin {
  return {
    name: 'vite-plugin-disable-react-developer-tools',
    enforce: 'pre',
    apply: 'build',
    transform: (code, id) => {
      if (id.includes('react-dom')) {
        return code.replaceAll('__REACT_DEVTOOLS_GLOBAL_HOOK__', 'undefined');
      }

      return code;
    },
  };
}

export default disableReactDeveloperTools;
