export function SectionEyebrow({ label, className = "" }: { label: string; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-mono text-xs text-primary ${className}`}>
      <span aria-hidden className="inline-block h-px w-6 bg-primary" />
      <span className="lowercase tracking-tight">// {label}</span>
    </span>
  );
}
