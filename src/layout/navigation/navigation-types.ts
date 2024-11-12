import type { ReactNode } from 'react';

export type MenuItem = {
  name: string;
  url: string;
  icon?: ReactNode;
  submenu?: MenuItem[];
};

export type Menu = MenuItem[];
