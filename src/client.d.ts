declare module '*.svg?jsx' {
  import type { ComponentProps, FunctionComponent } from 'react';

  interface ReactSVGComponent {
    title?: string;
    alt?: string;
  }

  const src: FunctionComponent<ComponentProps<'svg'> & ReactSVGComponent>;

  export default src;
}

declare module '*.svg?base64' {
  const src: string;

  export default src;
}
