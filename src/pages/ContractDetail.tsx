import { useParams, useLocation, Link } from 'react-router-dom';
import JobCard, { Job } from '../components/JobCard';
import { jobs } from '../data/jobs';
import { useTranslation } from 'react-i18next';

export default function ContractDetail() {
  const { id } = useParams();
  const location = useLocation();
  const { t } = useTranslation();

  const job: Job | undefined = (location.state as any)?.job || jobs.find((j) => j.id === id);

  if (!job) {
    return (
      <div className="p-8 text-center">
        <p>Contract not found.</p>
        <Link to="/contracts" className="underline text-sovietRed">
          {t('nav_contracts')}
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-8 space-y-6">
      <Link to="/contracts" className="underline text-sm">
        ← {t('nav_contracts')}
      </Link>

      <JobCard job={job} />

      <section className="prose dark:prose-invert">
        <h2>Description</h2>
        <p>{job.description ?? 'Detailed briefing will be provided upon acceptance.'}</p>
      </section>
    </div>
  );
} 