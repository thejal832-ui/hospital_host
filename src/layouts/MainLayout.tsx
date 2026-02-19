import React from 'react';
import MainNavbar from './MainNavbar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen pt-28 pb-12 flex flex-col items-center">
      <MainNavbar />
      <main className="w-full max-w-7xl px-4 flex-1">
        {children}
      </main>
      <footer className="w-full py-8 border-t border-slate-200 text-center text-slate-500 text-sm">
        <p>&copy; 2026 HospitalSync. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;
