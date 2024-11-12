import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from 'components';
import { TestWrapper } from 'tests/utils';

import useModal from './use-modal';

import type { ModalProps } from 'components';

function TestModal(props: ModalProps) {
  const { modal } = useModal();

  const onClick = () => {
    modal(props);
  };

  return (
    <div>
      <Button onClick={onClick}>Open Modal</Button>
    </div>
  );
}

describe('hooks/useModal', () => {
  it('should render the modal and close it', async () => {
    const title = 'Close Test';
    const onCancel = vi.fn();

    render(
      <TestWrapper>
        <TestModal title={title} onCancel={onCancel} transitionDuration={0} />
      </TestWrapper>,
    );

    const openButton = screen.getByRole('button', { name: /open modal/i });

    expect(openButton).toBeInTheDocument();

    await userEvent.click(openButton);

    await waitFor(() => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });

    const closeButton = screen.getByRole('button', { name: /cancel/i });

    expect(closeButton).toBeInTheDocument();

    await userEvent.click(closeButton);

    await waitFor(() => {
      expect(screen.queryByText(title)).not.toBeInTheDocument();
    });

    expect(onCancel).toHaveBeenCalledTimes(1);
  });
});
