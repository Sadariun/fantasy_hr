import { useState } from 'react';
import ProgressBar from '../components/ProgressBar';
import { useTranslation } from 'react-i18next';

const steps = ['Personal Info', 'Skills', 'References', 'Oath'];

export default function ApplyWizard() {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div className="max-w-xl mx-auto p-8 space-y-6">
      <h2 className="text-2xl font-bold text-center mb-4">{t('app_title')}</h2>
      <ProgressBar steps={steps} current={step} />

      {step === 0 && (
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm">{t('field_name')}</span>
            <input className="mt-1 w-full border px-3 py-2 rounded" placeholder="Ivan the Brave" />
          </label>
          <label className="block">
            <span className="text-sm">{t('field_email')}</span>
            <input className="mt-1 w-full border px-3 py-2 rounded" type="email" />
          </label>
          <label className="block">
            <span className="text-sm">{t('field_class')}</span>
            <select className="mt-1 w-full border px-3 py-2 rounded dark:text-gray-900">
              <option>Warrior</option>
              <option>Mage</option>
              <option>Priest</option>
              <option>Ranger</option>
              <option>Support Alchemist</option>
            </select>
          </label>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm">Primary Weapon</span>
            <select className="mt-1 w-full border px-3 py-2 rounded dark:text-gray-900">
              <option>Sword</option>
              <option>Axe</option>
              <option>Bow</option>
              <option>Magic Staff</option>
            </select>
          </label>
          <label className="block">
            <span className="text-sm">Years of Experience</span>
            <input className="mt-1 w-full border px-3 py-2 rounded" type="number" min="0" />
          </label>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm">Reference 1</span>
            <input className="mt-1 w-full border px-3 py-2 rounded" />
          </label>
          <label className="block">
            <span className="text-sm">Reference 2</span>
            <input className="mt-1 w-full border px-3 py-2 rounded" />
          </label>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4 text-sm">
          <p>
            I, the undersigned, swear by the eternal frost to uphold the values of the Guild and swing my blade with honour.
          </p>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> I accept the oath.
          </label>
        </div>
      )}

      <div className="flex justify-between mt-6">
        <button disabled={step === 0} onClick={prev} className="px-4 py-2 border rounded disabled:opacity-40">
          {t('btn_back')}
        </button>
        {step < steps.length - 1 ? (
          <button onClick={next} className="px-4 py-2 bg-sovietRed text-white rounded">
            {t('btn_next')}
          </button>
        ) : (
          <button className="px-4 py-2 bg-goldGuild text-gray-900 rounded">{t('btn_submit')}</button>
        )}
      </div>
    </div>
  );
} 