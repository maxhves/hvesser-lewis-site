import { ReactNode } from 'react'
import GridOutline from '@/components/ui/grid-outline'

export default function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <GridOutline className="flex w-full justify-center px-6" direction="vertical">
      <h2 className="max-w-xl border-x border-stone-200 py-6 text-center text-3xl font-medium text-stone-700 dark:border-stone-800 dark:text-stone-200 md:text-4xl">
        {children}
      </h2>
    </GridOutline>
  )
}
