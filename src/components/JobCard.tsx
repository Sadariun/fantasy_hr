import { BoltIcon, FireIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';

export interface Job {
  id: string;
  title: string;
  difficulty: number; // 1-5
  reward: string;
  category: string;
  tag?: 'Limited' | 'Hot';
  rarity?: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  description?: string;
  client?: string;
  location?: string;
}

const rarityColors: Record<string, string> = {
  Common: 'border-gray-300',
  Rare: 'border-blue-600',
  Epic: 'border-purple-600',
  Legendary: 'border-amber-500',
};

const rarityBg: Record<string, string> = {
  Common: 'bg-gray-500',
  Rare: 'bg-blue-600',
  Epic: 'bg-purple-700',
  Legendary: 'bg-amber-600',
};

export default function JobCard({ job, expanded = false }: { job: Job; expanded?: boolean }) {
  const { t } = useTranslation();
  return (
    <div
      className={`border border-gold border-l-2 rounded-xl p-6 bg-parchment/90 dark:bg-night/80 shadow-lg transform transition hover:-translate-y-1 hover:shadow-xl relative ${
        rarityColors[job.rarity ?? 'Common']
      } ${expanded ? 'min-h-64 md:min-h-72' : ''}`}
    >
      {job.tag && (
        <span
          className={`absolute top-2 right-2 flex items-center gap-1 text-xs px-3 py-1 rounded-full text-white ${
            job.tag === 'Limited' ? 'bg-frost-dark' : 'bg-sovietRed'
          }`}
        >
          {job.tag === 'Limited' ? <BoltIcon className="h-3 w-3" /> : <FireIcon className="h-3 w-3" />}
          {t(job.tag.toLowerCase())}
        </span>
      )}
      <span className="text-xs uppercase tracking-wide text-frost-dark dark:text-frost-light/80">
        {t(`category_${job.category.toLowerCase().replace(' ', '_')}`)}
      </span>
      <h3 className="font-semibold text-lg">{job.title}</h3>
      <div className="flex items-center gap-1 mt-1">
        {Array.from({ length: 5 }).map((_, idx) => (
          <div
            key={idx}
            className={`h-2 flex-1 rounded-sm ${idx < job.difficulty ? 'bg-frost-dark' : 'bg-frost-light dark:bg-gray-700'}`}
          />
        ))}
      </div>
      <div className="mt-auto text-sm font-medium text-sovietRed">{job.reward}</div>
      {expanded && (
        <div className="mt-4 text-sm space-y-1 opacity-90">
          {job.description && <p>{job.description}</p>}
          {job.client && (
            <div className="flex justify-between"><span className="font-semibold">Client:</span><span>{job.client}</span></div>
          )}
          {job.location && (
            <div className="flex justify-between"><span className="font-semibold">Location:</span><span>{job.location}</span></div>
          )}
        </div>
      )}
      <span className={`absolute -left-1 -top-1 px-3 py-1 text-[0.625rem] rounded-br-lg text-white ${rarityBg[job.rarity ?? 'Common']}`}>{job.rarity ?? 'Common'}</span>
    </div>
  );
} 