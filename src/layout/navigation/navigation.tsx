import { useState } from 'react';

import { Box } from '@mantine/core';
import { LuAlignLeft } from 'react-icons/lu';

import { Button, Link } from 'components';

import NavigationCollapse from './components/navigation-collapse/navigation-collapse';
import Menu from './navigation-data';

function Navigation() {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapse = () => {
    // TODO: change to prev=>!prev when UseState type is on repo
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <Box className="flex w-full justify-end">
        <Button variant="icon-dark" onClick={handleCollapse}>
          <LuAlignLeft />
        </Button>
      </Box>

      {Menu.map((menuItem) =>
        menuItem.submenu ? (
          <NavigationCollapse key={menuItem.url} menuItem={menuItem} collapsed={collapsed} />
        ) : (
          <Link
            key={menuItem.url}
            to={menuItem.url}
            startAdornment={menuItem.icon}
            variant={collapsed ? 'collapsed' : 'default'}>
            {menuItem.name}
          </Link>
        ),
      )}
    </div>
  );
}

export default Navigation;
