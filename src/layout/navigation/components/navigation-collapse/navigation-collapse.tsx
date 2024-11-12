import { useNavigate } from 'react-router-dom';

import { Link } from 'components';
import Collapse from 'components/collapse';

import type { MenuItem } from 'layout/navigation/navigation-types';

type NavigationCollapseProps = {
  menuItem: MenuItem;
  collapsed?: boolean;
};

function NavigationCollapse(props: NavigationCollapseProps) {
  const { menuItem, collapsed } = props;
  const { name, submenu, icon, url } = menuItem;

  const navigate = useNavigate();

  const onClick = () => {
    navigate(url);
  };

  return (
    <Collapse
      icon={icon}
      onClick={onClick}
      slotsStyle={{ triggersContainer: collapsed ? 'w-auto [&_button]:flex-col [&_button]:text-[8px]' : 'min-w-80 ' }}
      collapsedSection={submenu?.map((item, index) => (
        <Link
          key={item.url}
          to={item.url}
          variant={collapsed ? 'list-collapsed' : 'list'}
          startAdornment={item.icon}
          data-last={index + 1 === submenu.length}>
          {item.name}
        </Link>
      ))}>
      {name}
    </Collapse>
  );
}

export default NavigationCollapse;
