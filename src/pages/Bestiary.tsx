import BestiaryAccordion, { Beast } from '../components/BestiaryAccordion';
import { useTranslation } from 'react-i18next';
import { BugAntIcon, ShieldCheckIcon, FireIcon, SparklesIcon, TrophyIcon, HeartIcon } from '@heroicons/react/24/solid';

const iconCls = 'h-5 w-5 text-gold';

const beasts: Beast[] = [
  {
    id: 'b1',
    name: 'Ice Wraith',
    description: 'A spectral entity born from blizzards.',
    unlocked: true,
    icon: <SparklesIcon className={iconCls} />,
    danger: 3,
    habitat: 'Frozen blizzards and arctic plains',
    abilities: ['Intangible Body', 'Soul Freeze', 'Blizzard Cloak'],
    rarity: 'Rare',
  },
  {
    id: 'b2',
    name: 'Snow Golem',
    description: 'Animated ice and rock guardian.',
    unlocked: true,
    icon: <ShieldCheckIcon className={iconCls} />,
    danger: 2,
    habitat: 'Mountain passes & ruined forts',
    abilities: ['Ice Boulder Throw', 'Stone Skin', 'Reassemble'],
    rarity: 'Common',
  },
  {
    id: 'b3',
    name: 'White Dragon',
    description: 'Terrifying dragon ruling the polar skies.',
    unlocked: false,
    icon: <FireIcon className={iconCls} />,
    danger: 5,
    habitat: 'High peaks and glacial lairs',
    abilities: ['Frost Breath', 'Wing Tempest', 'Crystalline Scales'],
    rarity: 'Legendary',
  },
  {
    id: 'b4',
    name: 'Frost Troll',
    description: 'Massive creature lurking in ice caves, crushes foes with icy clubs.',
    unlocked: false,
    icon: <BugAntIcon className={iconCls} />,
    danger: 4,
    habitat: 'Ice caves & abandoned mines',
    abilities: ['Club Smash', 'Regenerate', 'Feral Roar'],
    rarity: 'Epic',
  },
  {
    id: 'b5',
    name: 'Polar Griffin',
    description: 'Majestic half-lion half-eagle that soars over snowy cliffs.',
    unlocked: false,
    icon: <TrophyIcon className={iconCls} />,
    danger: 3,
    habitat: 'Snow-cliff nests',
    abilities: ['Aerial Dive', 'Razor Talons', 'Piercing Screech'],
    rarity: 'Rare',
  },
  {
    id: 'b6',
    name: 'Aurora Sprite',
    description: 'Tiny fey being that dances within the northern lights.',
    unlocked: false,
    icon: <HeartIcon className={iconCls} />,
    danger: 1,
    habitat: 'Skies beneath the aurora',
    abilities: ['Light Warp', 'Prismatic Burst', 'Fey Trickery'],
    rarity: 'Common',
  },
];

export default function Bestiary() {
  const { t } = useTranslation();
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{t('nav_bestiary')}</h2>
      <BestiaryAccordion entries={beasts} />
    </div>
  );
} 