import { useId, useLayoutEffect, useRef, useState } from 'react';

import { createRoot } from 'react-dom/client';

import ModalHook from 'components/modal/modal-hook';

import type { ModalProps } from 'components';
import type { Root } from 'react-dom/client';

function useModal() {
  const [params, setParams] = useState<ModalProps | null>(null);

  const id = useId();
  const root = useRef<Root | null>(null);

  useLayoutEffect(() => {
    if (params) {
      let modals = document.querySelector<HTMLElement>('#modals');

      const modalId = id.replaceAll(/\W+/g, '');
      const modal = document.querySelector<HTMLElement>(`#${modalId}`) || document.createElement('div');

      if (!modals) {
        modals = document.createElement('div');
        modals.setAttribute('id', 'modals');
        document.body.append(modals);
      }

      const cleanup = () => {
        const { transitionDuration = 0 } = params;

        setTimeout(() => {
          if (root.current) {
            setParams(null);
            root.current.unmount();
            modal.remove();
          }

          if (modals?.childElementCount === 0) {
            modals.remove();
          }
        }, transitionDuration);
      };

      if (modals && !modal.id) {
        modal.setAttribute('id', modalId);
        root.current = createRoot(modal);
      }

      if (root.current) {
        modals.append(modal);
        root.current.render(<ModalHook {...params} onClose={cleanup} open />);
        setParams(null);
      }
    }
  }, [id, params]);

  return { modal: setParams };
}

export default useModal;
