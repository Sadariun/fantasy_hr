import { useTranslation } from 'react-i18next';

export default function LocaleSwitcher() {
  const { i18n } = useTranslation();

  const toggle = () => {
    const next = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(next);
  };

  return (
    <button onClick={toggle} className="text-sm underline">
      {i18n.language.toUpperCase()}
    </button>
  );
} 