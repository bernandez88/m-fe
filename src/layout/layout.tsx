import { AppShell } from '@mantine/core';
import { Outlet } from 'react-router-dom';

import { Navigation } from './navigation';

function Layout() {
  return (
    <AppShell className="flex">
      <AppShell.Navbar>
        <Navigation />
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>

      {/* TODO: Add Footer */}
    </AppShell>
  );
}

export default Layout;
