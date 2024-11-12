import { useShallow } from 'zustand/shallow';

import { authStore as AuthStore } from 'store';

function useAuthStore() {
  return AuthStore(useShallow((state) => state));
}

export default useAuthStore;
