import React from 'react'
import { ContentContainerNew } from '@/components/ui/content-container'
import { IconBrandGithub, IconBrandLinkedin, IconClipboardText, IconMail } from '@tabler/icons-react'
import { Link } from '@/components/ui/link'
import GridOutline from '@/components/ui/grid-outline'

//region Social Links

const socialLinks = [
  {
    label: 'Github',
    href: 'https://github.com/maxhves',
    icon: IconBrandGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/maxhves/',
    icon: IconBrandLinkedin,
  },
  {
    label: 'Email',
    href: 'mailto:max@hvesserlewis.com',
    icon: IconMail,
  },
  {
    label: 'Resume',
    href: '/maxhves_cv.pdf',
    icon: IconClipboardText,
  },
]

//endregion

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 dark:border-stone-800">
      <ContentContainerNew className="py-8">
        <GridOutline
          className="flex flex-col items-center justify-normal gap-5 md:flex-row md:justify-between"
          direction="vertical"
        >
          <Name />
          <SocialLinks />
        </GridOutline>
      </ContentContainerNew>
    </footer>
  )
}

//region Name

function Name() {
  return (
    <GridOutline className="mx-5 flex w-full justify-center md:w-fit">
      <GridOutline className="flex h-8 items-center text-sm text-stone-500">Maximilian Hvesser-Lewis</GridOutline>
    </GridOutline>
  )
}

//endregion

//region Social Links

function SocialLinks() {
  return (
    <GridOutline className="mx-5 flex w-full justify-center md:w-fit">
      <GridOutline className="flex w-fit items-center gap-1">
        {socialLinks.map((link) => (
          <Link
            className="flex h-8 items-center gap-1 px-3 text-sm text-stone-500 hover:text-stone-700 dark:hover:text-stone-300"
            key={link.label}
            href={link.href}
            rel="noreferrer"
            target="_blank"
          >
            <link.icon className="size-5 md:size-4" />
            <span className="hidden md:flex">{link.label}</span>
          </Link>
        ))}
      </GridOutline>
    </GridOutline>
  )
}

//endregion
