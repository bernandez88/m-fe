import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from 'constants/routes';
import { useAuthStore } from 'hooks';

function PublicRoute() {
  const { isLogged } = useAuthStore();

  return isLogged ? <Navigate to={ROUTES.HOME} /> : <Outlet />;
}

export default PublicRoute;
