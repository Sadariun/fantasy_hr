interface ProgressBarProps {
  steps: string[];
  current: number; // 0-indexed
}

export default function ProgressBar({ steps, current }: ProgressBarProps) {
  return (
    <div className="flex items-center gap-2 mb-6">
      {steps.map((label, idx) => (
        <div key={label} className="flex items-center gap-2 flex-1">
          <div
            className={`h-2 flex-1 rounded-full ${idx <= current ? 'bg-sovietRed' : 'bg-frost-light dark:bg-gray-700'}`}
          />
          {idx < steps.length - 1 && (
            <div className="w-4 h-4 flex items-center justify-center">
              <span className="text-xs text-gray-500">{idx + 1}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
} 