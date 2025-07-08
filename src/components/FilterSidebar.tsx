import { useState } from 'react';
import { BugAntIcon, ShieldCheckIcon, TrophyIcon, Squares2X2Icon, HeartIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';

interface FilterSidebarProps {
  categories: string[];
  onSelect: (category: string | null) => void;
}

// icon mapping
const iconMap: Record<string, JSX.Element> = {
  All: <Squares2X2Icon className="h-4 w-4 mr-2" />,
  Extermination: <BugAntIcon className="h-4 w-4 mr-2" />,
  Escort: <ShieldCheckIcon className="h-4 w-4 mr-2" />,
  'Boss Hunt': <TrophyIcon className="h-4 w-4 mr-2" />,
  Support: <HeartIcon className="h-4 w-4 mr-2" />,
};

export default function FilterSidebar({ categories, onSelect }: FilterSidebarProps) {
  const { t } = useTranslation();
  const [active, setActive] = useState<string | null>(null);

  return (
    <aside className="space-y-2">
      <h4 className="font-semibold mb-2">{t('filter')}</h4>
      <button
        onClick={() => {
          setActive(null);
          onSelect(null);
        }}
        className={`flex items-center text-left w-full px-4 py-2 rounded focus-visible:ring-2 focus-visible:ring-gold/80 hover:bg-frost-light dark:hover:bg-gray-700 ${active === null ? 'bg-frost dark:bg-gray-700' : ''}`}
      >
        {iconMap['All']}
        {t('category_all')}
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => {
            setActive(cat);
            onSelect(cat);
          }}
          className={`flex items-center text-left w-full px-4 py-2 rounded focus-visible:ring-2 focus-visible:ring-gold/80 hover:bg-frost-light dark:hover:bg-gray-700 ${active === cat ? 'bg-frost dark:bg-gray-700' : ''}`}
        >
          {iconMap[cat] ?? null}
          {t(`category_${cat.toLowerCase().replace(' ', '_')}`)}
        </button>
      ))}
    </aside>
  );
} 