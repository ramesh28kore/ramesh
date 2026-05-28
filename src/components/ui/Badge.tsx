import { ReactNode } from 'react';

type BadgeVariant = 'blue' | 'indigo' | 'purple' | 'cyan' | 'green' | 'amber';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  blue:   'bg-blue-500/15 text-blue-400 border-blue-500/30',
  indigo: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30',
  purple: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
  cyan:   'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
  green:  'bg-green-500/15 text-green-400 border-green-500/30',
  amber:  'bg-amber-500/15 text-amber-400 border-amber-500/30',
};

export function Badge({ children, variant = 'blue', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
