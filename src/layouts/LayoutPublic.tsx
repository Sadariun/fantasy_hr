import { Outlet, NavLink } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import Atmosphere from '../components/Atmosphere';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';

export default function LayoutPublic() {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col text-gray-900 dark:text-gray-100">
      <Atmosphere />
      <header className="px-6 py-4 flex items-center justify-between sticky top-0 z-30 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-sm">
        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          className="sm:hidden p-3 rounded focus-visible:ring-2 focus-visible:ring-gold/80 text-gray-900 dark:text-gray-100"
        >
          {mobileOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>

        <nav className="hidden sm:flex flex-wrap items-center gap-4 sm:gap-6">
          <span className="font-display text-lg">❄︎</span>
          <NavLink to="/" className={({ isActive }) => `relative block px-3 py-2 rounded focus-visible:ring-2 focus-visible:ring-gold/80 text-gray-900 dark:text-gray-100 after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-gold after:transition-all ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}>{t('nav_home')}</NavLink>
          <NavLink to="/contracts" className={({ isActive }) => `relative block px-3 py-2 rounded focus-visible:ring-2 focus-visible:ring-gold/80 text-gray-900 dark:text-gray-100 after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-gold after:transition-all ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}>{t('nav_contracts')}</NavLink>
          <NavLink to="/bestiary" className={({ isActive }) => `relative block px-3 py-2 rounded focus-visible:ring-2 focus-visible:ring-gold/80 text-gray-900 dark:text-gray-100 after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-gold after:transition-all ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}>{t('nav_bestiary')}</NavLink>
          <NavLink to="/apply" className={({ isActive }) => `relative block px-3 py-2 rounded focus-visible:ring-2 focus-visible:ring-gold/80 text-gray-900 dark:text-gray-100 after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-gold after:transition-all ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}>{t('nav_apply')}</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </header>

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col gap-6 p-6 bg-white dark:bg-gray-900 shadow-lg sm:hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-display text-lg">❄︎</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-3 rounded focus-visible:ring-2 focus-visible:ring-gold/80">
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <NavLink onClick={() => setMobileOpen(false)} to="/" className={({ isActive }) => `block px-4 py-2 rounded focus-visible:ring-2 focus-visible:ring-gold/80 ${isActive ? 'font-bold bg-frost-light dark:bg-gray-700' : ''}`}>{t('nav_home')}</NavLink>
            <NavLink onClick={() => setMobileOpen(false)} to="/contracts" className={({ isActive }) => `block px-4 py-2 rounded focus-visible:ring-2 focus-visible:ring-gold/80 ${isActive ? 'font-bold bg-frost-light dark:bg-gray-700' : ''}`}>{t('nav_contracts')}</NavLink>
            <NavLink onClick={() => setMobileOpen(false)} to="/bestiary" className={({ isActive }) => `block px-4 py-2 rounded focus-visible:ring-2 focus-visible:ring-gold/80 ${isActive ? 'font-bold bg-frost-light dark:bg-gray-700' : ''}`}>{t('nav_bestiary')}</NavLink>
            <NavLink onClick={() => setMobileOpen(false)} to="/apply" className={({ isActive }) => `block px-4 py-2 rounded focus-visible:ring-2 focus-visible:ring-gold/80 ${isActive ? 'font-bold bg-frost-light dark:bg-gray-700' : ''}`}>{t('nav_apply')}</NavLink>
            <div className="mt-auto">
              <ThemeToggle />
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      <main className="flex-1 backdrop-blur-sm bg-white/60 dark:bg-gray-900/60">
        <Outlet />
      </main>
      <footer className="text-center text-xs py-6 space-y-2 border-t border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md">
        <div className="flex justify-center gap-6 mb-2">
          <img src="https://dummyimage.com/80x40/4b6b88/ffffff&text=Kremlin+Steel" alt="Sponsor: Kremlin Steel" className="h-8 w-auto max-w-full" loading="lazy" />
          <img src="https://dummyimage.com/80x40/c42021/ffffff&text=Crystal+Corp" alt="Sponsor: Crystal Corp" className="h-8 w-auto max-w-full" loading="lazy" />
          <img src="https://dummyimage.com/80x40/d6b36a/ffffff&text=Vodka+Ice" alt="Sponsor: Vodka Ice" className="h-8 w-auto max-w-full" loading="lazy" />
        </div>
        <p>© 2025 Frostnorth Talent Guild. All rights reserved.</p>
      </footer>
    </div>
  );
} 