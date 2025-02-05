import { Toaster } from '@/components/ui/toaster.tsx';
import { I18nProvider } from '@/i18n/i18n-provider.tsx';
import { store } from '@/stores/store.ts';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import AppRoutes from './routes/route.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <I18nProvider>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </QueryClientProvider>
      </I18nProvider>
    </Provider>
  </StrictMode>,
);
