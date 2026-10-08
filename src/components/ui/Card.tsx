import React from 'react';
import { clsx } from 'clsx';
import { TiltSurface } from './Depth';
import { twMerge } from 'tailwind-merge';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  bordered?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverEffect = false,
  bordered = true,
  ...props
}) => {
  const Surface = hoverEffect ? TiltSurface : 'div';
  return (
    <Surface
      className={twMerge(
        clsx(
          'bg-white dark:bg-navy-900 rounded-2xl p-6 transition-all duration-300',
          bordered && 'border border-slate-200 dark:border-slate-800 shadow-sm',
          hoverEffect && 'hover:shadow-card-hover hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-0.5',
          className
        )
      )}
      {...props}
    >
      {children}
    </Surface>
  );
};
