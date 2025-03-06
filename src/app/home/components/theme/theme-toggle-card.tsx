'use client'

import { Switch } from '@headlessui/react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { IconMoonFilled, IconSunFilled } from '@tabler/icons-react'
import { clsx } from 'clsx'
import GridOutline from '@/components/ui/grid-outline'

export function ThemeToggleCard() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  function onSwitchChanged(checked: boolean) {
    checked ? setTheme('light') : setTheme('dark')
  }

  return (
    <GridOutline>
      <div className="flex h-64 items-center justify-center rounded-2xl border border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900 md:w-64">
        <div className="rounded-full border border-stone-200 bg-white p-2 dark:border-stone-800 dark:bg-stone-950">
          <div className="rounded-full bg-stone-200 p-1 dark:bg-stone-800">
            <Switch
              checked={mounted ? theme === 'light' : false}
              onChange={onSwitchChanged}
              className="group relative box-content flex h-14 w-28 cursor-pointer rounded-full border-2 border-stone-100 bg-stone-100 transition-colors duration-200 ease-in-out dark:border-stone-950 dark:bg-stone-950"
            >
              <span
                className={clsx(
                  'translate-x-14 dark:translate-x-0',
                  'pointer-events-none relative inline-block size-14 transform rounded-full border-2 border-stone-200 bg-white ring-0 transition-all duration-200 ease-in-out dark:border-stone-800 dark:bg-stone-900'
                )}
              >
                <span
                  className={clsx(
                    'absolute inset-0 flex size-full items-center justify-center opacity-0 transition-opacity duration-100 ease-out dark:opacity-100 dark:duration-200 dark:ease-in'
                  )}
                >
                  <IconMoonFilled className="size-8 text-stone-500" />
                </span>
                <span className="absolute inset-0 flex size-full items-center justify-center opacity-100 transition-opacity duration-200 ease-in dark:opacity-0 dark:duration-100 dark:ease-out">
                  <IconSunFilled className="size-8 text-stone-500" />
                </span>
              </span>
            </Switch>
          </div>
        </div>
      </div>
    </GridOutline>
  )
}
