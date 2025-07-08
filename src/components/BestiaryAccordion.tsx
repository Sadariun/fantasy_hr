import { useState, ReactNode } from 'react';

export interface Beast {
  id: string;
  name: string;
  description: string;
  unlocked: boolean;
  icon: ReactNode;
  danger: number; // 1–5
  habitat: string;
  abilities: string[];
  rarity?: 'Common' | 'Rare' | 'Epic' | 'Legendary';
}

const rarityBorders: Record<string, string> = {
  Common: 'border-gray-300',
  Rare: 'border-blue-600',
  Epic: 'border-purple-600',
  Legendary: 'border-amber-500',
};

export default function BestiaryAccordion({ entries }: { entries: Beast[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-2">
      {entries.map((beast) => (
        <div
          key={beast.id}
          className={`border rounded dark:border-gray-700 ${rarityBorders[beast.rarity ?? 'Common']}`}
        >
          <button
            className="w-full flex justify-between items-center px-5 py-3 font-medium bg-frost-light dark:bg-gray-800 rounded focus-visible:ring-2 focus-visible:ring-gold/80"
            onClick={() => setOpenId(openId === beast.id ? null : beast.id)}
          >
            <span className="flex items-center">
              {beast.icon}
              <span className="ml-2">{beast.name}</span>
            </span>
            <span>{openId === beast.id ? '-' : '+'}</span>
          </button>
          {openId === beast.id && (
            <div className="px-4 py-3 bg-white dark:bg-gray-900 text-sm space-y-3">
              {beast.unlocked ? (
                <>
                  <p>{beast.description}</p>

                  {/* Danger meter */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-2 flex-1 rounded-sm ${
                          idx < beast.danger ? 'bg-sovietRed' : 'bg-frost-light dark:bg-gray-700'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Habitat */}
                  <div>
                    <span className="font-semibold">Habitat: </span>
                    {beast.habitat}
                  </div>

                  {/* Abilities */}
                  <div>
                    <span className="font-semibold">Abilities:</span>
                    <ul className="list-disc list-inside ml-4">
                      {beast.abilities.map((ab) => (
                        <li key={ab}>{ab}</li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                'Unlock this entry by logging in.'
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
} 