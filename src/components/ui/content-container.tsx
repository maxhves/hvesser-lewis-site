import { CSSProperties, ReactNode } from 'react'
import { clsx } from 'clsx'

export default function ContentContainer({
  className,
  style,
  children,
}: {
  className?: string
  style?: CSSProperties
  children: ReactNode
}) {
  return (
    <div className={clsx(className, 'flex w-full justify-center px-4 sm:px-8')} style={style}>
      <div className="flex w-full max-w-4xl flex-col">{children}</div>
    </div>
  )
}

//TODO: Refactor old container with new

export function ContentContainerNew({
  outerClassName,
  className,
  children,
}: {
  outerClassName?: string
  className?: string
  children: ReactNode
}) {
  return (
    <div className={clsx(outerClassName, 'relative flex justify-center px-6 md:px-8')}>
      {/* Center Line */}
      <div className="absolute inset-y-0 left-1/2 z-0 w-px bg-stone-200 dark:bg-stone-800" />

      <div className={clsx(className, 'relative flex w-full max-w-6xl flex-col')}>
        {/* Left Line */}
        <div className="absolute inset-y-0 left-0 w-px bg-stone-200 dark:bg-stone-800" />

        {/* Right Line */}
        <div className="absolute inset-y-0 right-0 w-px bg-stone-200 dark:bg-stone-800" />

        {children}
      </div>
    </div>
  )
}


//TODO: Refactor old container with new