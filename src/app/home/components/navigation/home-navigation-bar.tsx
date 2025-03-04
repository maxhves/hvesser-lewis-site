import NavigationBar from '@/components/ui/navigation-bar'
import { HomeNavigationButton } from '@/app/home/components/navigation/home-navigation-button'

//region Navigation Links

const navigationLinks = [
  {
    label: 'About',
    href: '/',
  },
  {
    label: 'Expertise',
    href: '/#expertise',
  },
  {
    label: 'Projects',
    href: '/#projects',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
]

//endregion

export default function HomeNavigationBar() {
  return (
    <NavigationBar>
      <div className="flex w-full justify-center border-y border-stone-200 dark:border-stone-800">
        <div className="border-x border-stone-200 dark:border-stone-800">
          <div className="-m-px flex items-center gap-1 rounded-full border border-stone-200 bg-white p-1.5 dark:border-stone-800 dark:bg-stone-900">
            {navigationLinks.map((link) => (
              <HomeNavigationButton key={link.label} href={link.href}>
                {link.label}
              </HomeNavigationButton>
            ))}
          </div>
        </div>
      </div>
    </NavigationBar>
  )
}
