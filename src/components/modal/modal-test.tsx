import { useState } from 'react';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from 'components';
import { TestWrapper } from 'tests/utils';

import Modal from './modal';

import type { ModalProps } from './modal-types';

function TestModal(props: ModalProps) {
  const { open: openProp = false, ...restOfProps } = props;

  const [open, setOpen] = useState(openProp);

  const onClick = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button onClick={onClick}>Open Modal</Button>

      <Modal {...restOfProps} transitionDuration={0} open={open} setOpen={setOpen}>
        Modal
      </Modal>
    </div>
  );
}

describe('components/Modal', () => {
  it('should render the modal', async () => {
    const title = 'Close Test';
    const subTile = 'Sub Title Test';
    const logo = 'Logo Test';

    render(
      <TestWrapper>
        <TestModal title={title} subTitle={subTile} logo={logo} />
      </TestWrapper>,
    );

    const openButton = screen.getByRole('button', { name: /open modal/i });

    expect(openButton).toBeInTheDocument();
    await userEvent.click(openButton);

    await waitFor(() => {
      expect(screen.getByText(logo)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText(subTile)).toBeInTheDocument();
    });
  });

  it('should render the modal with cancel action', async () => {
    const subTitle = 'Cancel Test';
    const onCancel = vi.fn();
    const onClose = vi.fn();

    render(
      <TestWrapper>
        <TestModal subTitle={subTitle} onCancel={onCancel} onClose={onClose} />
      </TestWrapper>,
    );

    const openButton = screen.getByRole('button', { name: /open modal/i });

    expect(openButton).toBeInTheDocument();
    await userEvent.click(openButton);

    await waitFor(() => {
      expect(screen.getByText(subTitle)).toBeInTheDocument();
    });

    const cancelButton = screen.getByRole('button', { name: /cancel/i });

    expect(cancelButton).toBeInTheDocument();
    await userEvent.click(cancelButton);

    await waitFor(() => {
      expect(screen.queryByText(subTitle)).not.toBeInTheDocument();
    });

    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it('should render the modal with ok action', async () => {
    const title = 'Ok Test';
    const onOk = vi.fn();
    const onClose = vi.fn();

    render(
      <TestWrapper>
        <TestModal title={title} onOk={onOk} onClose={onClose} />
      </TestWrapper>,
    );

    const openButton = screen.getByRole('button', { name: /open modal/i });

    expect(openButton).toBeInTheDocument();
    await userEvent.click(openButton);

    await waitFor(() => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });

    const okButton = screen.getByRole('button', { name: /confirm/i });

    expect(okButton).toBeInTheDocument();
    await userEvent.click(okButton);

    await waitFor(() => {
      expect(screen.queryByText(title)).not.toBeInTheDocument();
    });

    expect(onOk).toHaveBeenCalledTimes(1);
  });

  it('should render the modal with full screen', async () => {
    const title = 'Full Screen Test';

    render(
      <TestWrapper>
        <TestModal title={title} fullScreen />
      </TestWrapper>,
    );

    const openButton = screen.getByRole('button', { name: /open modal/i });

    expect(openButton).toBeInTheDocument();
    await userEvent.click(openButton);

    await waitFor(() => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });

    const { firstChild } = screen.getByRole('dialog');

    expect(firstChild).toHaveClass('size-full');
  });

  it('should render the modal and close with escape key', async () => {
    const title = 'Escape Key Test';
    const onClose = vi.fn();
    const onKeyDown = vi.fn();

    render(
      <TestWrapper>
        <TestModal title={title} onClose={onClose} onKeyDown={onKeyDown} />
      </TestWrapper>,
    );

    const openButton = screen.getByRole('button', { name: /open modal/i });

    expect(openButton).toBeInTheDocument();

    await userEvent.click(openButton);

    await waitFor(() => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });

    const dialog = screen.getByRole('dialog');

    await userEvent.keyboard('{Escape}');

    fireEvent.keyDown(dialog, { key: 'Escape' }); // TODO: check with portal

    await waitFor(() => {
      expect(screen.queryByText(title)).not.toBeInTheDocument();
    });

    expect(onClose).toHaveBeenCalledTimes(1);
    expect(onKeyDown).toHaveBeenCalledTimes(1);
  });

  it('should render the modal and close with backdrop click', async () => {
    const title = 'Backdrop Click Test';
    const onClose = vi.fn();
    const onClick = vi.fn();

    render(
      <TestWrapper>
        <TestModal title={title} onClose={onClose} onClick={onClick} />
      </TestWrapper>,
    );

    const openButton = screen.getByRole('button', { name: /open modal/i });

    expect(openButton).toBeInTheDocument();

    await userEvent.click(openButton);

    await waitFor(() => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });

    const dialog = screen.getByRole('dialog');

    await userEvent.click(dialog);

    await waitFor(() => {
      expect(screen.queryByText(title)).not.toBeInTheDocument();
    });

    expect(onClose).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
