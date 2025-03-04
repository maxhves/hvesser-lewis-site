import CurrentLocationCard from '@/app/home/components/location/current-location-card'
import { ThemeToggleCard } from '@/app/home/components/theme/theme-toggle-card'
import { ContentContainerNew } from '@/components/ui/content-container'
import GridOutline from '@/components/ui/grid-outline'

export default function Widgets() {
  return (
    <ContentContainerNew>
      <GridOutline className="flex flex-col gap-5 md:flex-row" direction="vertical">
        <CurrentLocationCard />
        <ThemeToggleCard />
      </GridOutline>
    </ContentContainerNew>
  )
}
