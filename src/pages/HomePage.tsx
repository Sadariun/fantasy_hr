import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import JobCard from '../components/JobCard';
import SpellButton from '../components/SpellButton';

export default function HomePage() {
  const { t } = useTranslation();

  const completer = {
    name: 'Svetlana Iceborn',
    rank: 'Diamond',
    class: 'Mage',
  };

  return (
    <>
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center py-20 text-center space-y-6"
    >
      <SparklesIcon className="h-16 w-16 text-gold mb-4" />
      <motion.h1
        initial={{ opacity: 0, y: -40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="font-display text-5xl md:text-7xl tracking-wider drop-shadow-lg text-night dark:bg-gradient-to-br dark:from-gold dark:to-parchment dark:text-transparent dark:bg-clip-text"
      >
        {t('guild_name')}
      </motion.h1>
      <p className="max-w-xl text-lg opacity-90 text-gray-900 dark:text-white dropcap">
        {t('snow_warning')}
      </p>
      <SpellButton variant="primary">
        {t('call_to_action')}
      </SpellButton>
    </motion.section>

    <section className="max-w-3xl mx-auto px-4 py-12 space-y-4">
      <h2 className="text-2xl font-bold">About Frostnorth Talent Guild</h2>
      <p>
        Founded in the wake of the Great Thaw, the Frostnorth Talent Guild combines modern HR practices with ancient
        guild traditions. Our scribes tirelessly match brave adventurers to lucrative monster‐slaying contracts across
        the icy oblasts. Pension plans are paid in dragon scales, and on-site medics specialise in frostbite removal.
      </p>
      <p>
        Whether you are a fledgling knight or a seasoned archmage, we offer competitive slaying packages, continuous
        professional development in elemental resistance, and a company owl courier network for rapid decree delivery.
        Добро пожаловать, герой!
      </p>
    </section>

    <section className="max-w-5xl mx-auto px-4 py-12">
      <Link to="/contracts" className="block text-2xl font-bold mb-4 text-center hover:text-gold transition-colors">
        {t('catch_of_day')}
      </Link>
      <JobCard
        job={{
          id: 'featured',
          title: 'Hunt the Frost Phoenix',
          difficulty: 4,
          reward: '900 Gold Crowns + 40 Ice Shards',
          category: 'Boss Hunt',
          tag: 'Hot',
          rarity: 'Legendary',
          description: 'A mythical phoenix has been sighted over the polar peaks. Capture its burning feather.',
        }}
        expanded
      />
      <div className="mt-4 text-sm flex justify-between bg-white/70 dark:bg-gray-800/70 p-4 rounded shadow">
        <div>
          <p className="font-semibold">Completed by</p>
          <p>{completer.name}</p>
        </div>
        <div className="text-right">
          <p className="font-semibold">Rank</p>
          <p>{completer.rank}</p>
          <p className="font-semibold mt-2">Class</p>
          <p>{completer.class}</p>
        </div>
      </div>
    </section>

    <section className="max-w-4xl mx-auto px-4 py-12 space-y-4">
      <h3 className="text-2xl font-bold mb-2 text-center">{t('achievements')}</h3>
      <ul className="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200">
        <li>{t('achievement_1')}</li>
        <li>{t('achievement_2')}</li>
        <li>{t('achievement_3')}</li>
      </ul>
    </section>

    {/* Services Offered */}
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h3 className="text-2xl font-bold mb-8 text-center">Services Offered</h3>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 shadow hover:shadow-lg transition">
          <h4 className="font-semibold mb-2">Monster Extermination</h4>
          <p className="text-sm opacity-80">From pesky ice imps to colossal frost giants – our heroes handle threats of any scale.</p>
        </div>
        <div className="p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 shadow hover:shadow-lg transition">
          <h4 className="font-semibold mb-2">Escort &amp; Logistics</h4>
          <p className="text-sm opacity-80">Secure transport for caravans, dignitaries and magical artifacts across treacherous tundra.</p>
        </div>
        <div className="p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 shadow hover:shadow-lg transition">
          <h4 className="font-semibold mb-2">Arcane Support</h4>
          <p className="text-sm opacity-80">Healing rites, barrier spells and tactical divination supplied by certified guild mages.</p>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h3 className="text-2xl font-bold mb-8 text-center">What Adventurers Say</h3>
      <div className="space-y-8">
        <blockquote className="relative p-6 bg-white/80 dark:bg-gray-800/80 rounded-xl shadow">
          <p className="italic">“The guild secured my village from frost wraiths overnight. Their efficiency is unmatched.”</p>
          <footer className="mt-4 text-sm font-semibold">— Borislav, Mayor of Krasnyy Pass</footer>
        </blockquote>
        <blockquote className="relative p-6 bg-white/80 dark:bg-gray-800/80 rounded-xl shadow">
          <p className="italic">“Thanks to their potion contract, our vanguard survived the ice wyrm siege with minimal losses.”</p>
          <footer className="mt-4 text-sm font-semibold">— Captain Irina Volkov</footer>
        </blockquote>
      </div>
    </section>
    </>
  );
} 