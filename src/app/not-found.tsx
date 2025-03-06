import React from 'react'
import { ContentContainerNew } from '@/components/ui/content-container'
import GridOutline from '@/components/ui/grid-outline'
import { clsx } from 'clsx'
import { dmSans } from '@/app/fonts/fonts'
import { Button } from '@/components/ui/button'

//region Main Component

export default function NotFound() {
  return (
    <main className="flex-grow">
      <ContentContainerNew outerClassName="h-full" className="justify-center">
        <GridOutline className="flex w-full justify-center" direction="vertical">
          <GridOutline className="w-full max-w-sm py-6" direction="horizontal">
            <h1
              className={clsx(dmSans.className, 'text-center text-3xl font-medium text-stone-700 dark:text-stone-300')}
            >
              Page not found
            </h1>
            <p className="mt-4 text-center text-base font-normal text-stone-500">
              Unfortunately, the page you’re looking for doesn’t appear to exist.
            </p>
            <GridOutline className="mt-6 flex justify-center">
              <GridOutline className="w-fit" direction="horizontal">
                <Button plain={true} size="large" href="/">
                  Go back home
                </Button>
              </GridOutline>
            </GridOutline>
          </GridOutline>
        </GridOutline>
      </ContentContainerNew>
    </main>
  )
}

//endregion
