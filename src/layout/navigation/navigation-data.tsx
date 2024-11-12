import { LuFileText, LuHome } from 'react-icons/lu';

import { ROUTES } from '../../constants';

import type { Menu as MenuType } from './navigation-types';

const Menu: MenuType = [
  {
    name: 'Home',
    url: ROUTES.HOME,
    icon: <LuHome />,
    submenu: [
      {
        name: 'Create New Revision',
        url: ROUTES.CREATE_NEW_REVISION,
        icon: <LuFileText />,
      },
      {
        name: 'Revision Log',
        url: ROUTES.REVISION_LOG,
      },
    ],
  },
  {
    name: 'Parameters',
    url: ROUTES.PARAMETERS,
    icon: <LuFileText />,
  },
];

export default Menu;
