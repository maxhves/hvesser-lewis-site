import { ReactNode } from 'react'
import { clsx } from 'clsx'

export default function GridOutline({
  className,
  direction = 'both',
  children,
}: {
  className?: string
  direction?: 'horizontal' | 'vertical' | 'both'
  children: ReactNode
}) {
  return (
    <div className={clsx('relative', className)}>
      <div
        aria-hidden="true"
        className={clsx('pointer-events-none absolute inset-0 border-stone-200 dark:border-stone-800', {
          'border-y': direction === 'vertical' || direction === 'both',
          'border-x': direction === 'horizontal' || direction === 'both',
        })}
      />
      {children}
    </div>
  )
}
