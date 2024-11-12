import type { PropsWithChildren } from 'react';

import { Popover as MantinePopover } from '@mantine/core';

import Button from 'components/button';

import PopoverStyles from './popover-styles';

import type { PopoverProps as MantinePopoverProps } from '@mantine/core';
import type { ButtonProps } from 'components/button';
import type { VariantProps } from 'tailwind-variants';

type PopoverProps = PropsWithChildren<{
  TargetProps?: Omit<ButtonProps, 'children'>;
}> &
  MantinePopoverProps &
  VariantProps<typeof PopoverStyles>;

function Popover(props: PopoverProps) {
  const { children, variant, TargetProps, disabled, ...rest } = props;
  const { className: ButtonClassName, ...restOfButtonProps } = TargetProps || {};

  const { target, dropdown } = PopoverStyles({ variant });

  return (
    <MantinePopover position="bottom-start" disabled={disabled} {...rest}>
      <MantinePopover.Target>
        <Button
          variant="no-style"
          className={target({ className: ButtonClassName })}
          {...restOfButtonProps}
          disabled={disabled}>
          {children}
        </Button>
      </MantinePopover.Target>

      <MantinePopover.Dropdown className={dropdown()}>
        <div>Dropdown content</div>
      </MantinePopover.Dropdown>
    </MantinePopover>
  );
}

export default Popover;
