import { Outlet } from 'react-router-dom';

import { TokenListener } from 'services';

function Auth() {
  return (
    <TokenListener>
      <Outlet />
    </TokenListener>
  );
}

export default Auth;
