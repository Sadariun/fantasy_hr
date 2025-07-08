import JobCard from '../components/JobCard';
import { jobs } from '../data/jobs';
import FilterSidebar from '../components/FilterSidebar';
import { useState, useMemo } from 'react';
import Modal from '../components/Modal';
import { Job } from '../components/JobCard';

export default function JobBoard() {
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [selected, setSelected] = useState<Job | null>(null);
  const categories = useMemo(() => Array.from(new Set(jobs.map((j) => j.category))), []);

  const filtered = useMemo(() => {
    if (!categoryFilter) return jobs;
    return jobs.filter((j) => j.category === categoryFilter);
  }, [categoryFilter]);

  return (
    <div className="md:flex gap-6 p-8">
      <FilterSidebar categories={categories} onSelect={setCategoryFilter} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
        {filtered.map((job) => (
          <button key={job.id} onClick={() => setSelected(job)} className="text-left">
            <JobCard job={job} />
          </button>
        ))}
      </div>
      <Modal open={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div className="space-y-4">
            <JobCard job={selected} expanded />
          </div>
        )}
      </Modal>
    </div>
  );
} 