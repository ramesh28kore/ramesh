interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-400 mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className={`text-4xl md:text-5xl font-bold text-white leading-[1.08] mb-6 ${centered ? 'mx-auto max-w-3xl' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-slate-400 text-lg leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
