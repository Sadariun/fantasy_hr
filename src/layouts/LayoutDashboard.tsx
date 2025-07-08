import { Outlet, NavLink } from 'react-router-dom';

export default function LayoutDashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <aside className="w-full md:w-64 bg-white dark:bg-gray-800 px-4 py-6 shadow-md md:fixed md:h-screen">
        <nav className="space-y-4">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md transition focus-visible:ring-2 focus-visible:ring-gold/80 ${
                isActive ? 'font-bold bg-frost-light dark:bg-gray-700' : ''
              }`
            }
          >
            Overview
          </NavLink>
        </nav>
      </aside>
      <main className="flex-1 md:ml-64 p-6">
        <Outlet />
      </main>
    </div>
  );
} 