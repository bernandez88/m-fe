import type { PropsWithChildren } from 'react';

import { keepPreviousData, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 0,
      staleTime: 0,
      retry: false,
      refetchOnWindowFocus: false,
      placeholderData: keepPreviousData,
    },
  },
});

function ReactQueryProvider(props: PropsWithChildren) {
  const { children } = props;

  return (
    <QueryClientProvider client={queryClient}>
      {children}

      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;
