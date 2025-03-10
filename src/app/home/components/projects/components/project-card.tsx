import { ElementType } from 'react'
import { dmSans } from '@/app/fonts/fonts'
import { clsx } from 'clsx'
import { Link } from '@/components/ui/link'
import { IconArrowRight } from '@tabler/icons-react'
import GridOutline from '@/components/ui/grid-outline'

export default function ProjectCard({
  title,
  description,
  href,
  imagePreview,
}: {
  title: string
  description: string
  href: string
  imagePreview: ElementType
}) {
  const ImagePreview = imagePreview

  return (
    <GridOutline className="flex flex-col gap-5 md:flex-row">
      {/* Project Information */}
      <GridOutline className="w-full md:w-2/5">
        <div className="rounded-2xl border border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
          <div className="w-full px-6">
            <div className="w-full border-x border-stone-200 pb-8 pt-6 dark:border-stone-800">
              <h1 className={clsx(dmSans.className, 'text-2xl font-medium text-stone-700 dark:text-stone-300')}>
                {title}
              </h1>
              <p className="mt-4 whitespace-pre-wrap text-base font-normal text-stone-500">{description}</p>
            </div>
          </div>
          <GridOutline className="bg-stone-50 px-6 dark:bg-stone-950/50" direction="vertical">
            <GridOutline direction="horizontal">
              <Link
                className="relative flex h-10 w-full items-center justify-between rounded-full border border-stone-200 bg-white px-5 text-sm font-medium text-stone-700 hover:bg-stone-50 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-300 dark:hover:bg-stone-950/50"
                href={href}
                rel="noreferrer"
                target="_blank"
              >
                Visit project website
                <IconArrowRight className="size-4" />
              </Link>
            </GridOutline>
          </GridOutline>
          <div className="h-6 w-full px-6">
            <div className="h-full w-full border-x border-stone-200 dark:border-stone-800" />
          </div>
        </div>
      </GridOutline>

      {/* Project Preview Image */}
      <GridOutline className="w-full md:w-3/5">
        <div className="h-72 border border-stone-200 bg-stone-50 p-2 dark:border-stone-800 dark:bg-stone-900/50 md:h-full">
          <ImagePreview />
        </div>
      </GridOutline>
    </GridOutline>
  )
}
