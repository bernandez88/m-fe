import { useState } from 'react';

import { Box, Collapse as MantineCollapse } from '@mantine/core';
import { LuChevronDown, LuChevronUp } from 'react-icons/lu';

import Button from 'components/button';

import CollapseStyle from './collapse-style';

import type { ButtonProps } from 'components/button';
import type { VariantProps } from 'tailwind-variants';

type SlotStyles = {
  container?: string;
  triggersContainer?: string;
  collapseContainer?: string;
};

type CollapseProps = Omit<ButtonProps, 'className' | 'variant'> & {
  icon?: React.ReactNode;
  collapsedSection: React.ReactNode;
  slotsStyle?: SlotStyles;
} & VariantProps<typeof CollapseStyle>;

function Component(props: CollapseProps) {
  const { children, icon, variant, collapsedSection, slotsStyle, onClick, ...rest } = props;
  const [opened, setOpened] = useState(false);

  const { container, triggersContainer, collapseContainer } = CollapseStyle({ variant });

  const toggle = () => {
    setOpened((prev) => !prev);
  };

  return (
    <Box className={container({ className: slotsStyle?.container })} aria-label="collapse-container" data-open={opened}>
      <div className={triggersContainer({ className: slotsStyle?.triggersContainer })} data-open={opened}>
        <Button variant="collapse" onClick={onClick || toggle} startAdornment={icon} className="flex-1" {...rest}>
          {children}
        </Button>

        <Button type="button" onClick={toggle} variant="collapse" aria-label="collapse-trigger">
          {opened ? <LuChevronUp size={24} /> : <LuChevronDown size={24} />}
        </Button>
      </div>

      <MantineCollapse
        in={opened}
        className={collapseContainer({ className: slotsStyle?.collapseContainer })}
        aria-label="collapse-section">
        {collapsedSection}
      </MantineCollapse>
    </Box>
  );
}

const Collapse = Component;

export default Collapse;
