import { Navigate } from 'react-router-dom';

import { ROUTES } from 'constants/routes';
import { useAuthStore } from 'hooks';
import { Layout } from 'layout';

function PrivateRoute() {
  const { isLogged } = useAuthStore();

  return isLogged ? <Layout /> : <Navigate to={ROUTES.LOGIN} />;
}

export default PrivateRoute;
