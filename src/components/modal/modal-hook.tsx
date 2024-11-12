import { useState } from 'react';

import Modal from './modal';

import type { ModalProps } from './modal-types';

function ModalHook(props: ModalProps) {
  const { open: openProp = false, ...restOfProps } = props;

  const [open, setOpen] = useState(openProp);

  return <Modal {...restOfProps} open={open} setOpen={setOpen} />;
}

export default ModalHook;
