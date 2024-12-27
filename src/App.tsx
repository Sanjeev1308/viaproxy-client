/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppSidebar } from '@/components/layout/app-sidebar';
import { Header } from '@/components/layout/header';
import { ProfileDropdown } from '@/components/profile-dropdown';
import { SidebarProvider } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { Outlet } from 'react-router-dom';
import './App.css';

function App({ children }: any) {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <div
        id="content"
        className={cn(
          'max-w-full w-full ml-auto',
          'peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon))]',
          'peer-data-[state=expanded]:w-[calc(100%-var(--sidebar-width))]',
          'transition-[width] ease-linear duration-200',
          'h-svh flex flex-col',
        )}
      >
        <Header>
          <div className="ml-auto flex items-center space-x-4">
            <ProfileDropdown />
          </div>
        </Header>
        {children ? children : <Outlet />}
      </div>
    </SidebarProvider>
  );
}

export default App;
