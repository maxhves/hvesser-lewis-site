import SectionHeading from '@/app/home/components/common/section-heading'
import { ContentContainerNew } from '@/components/ui/content-container'
import ProjectCard from '@/app/home/components/projects/components/project-card'

export default function Projects() {
  return (
    <section>
      <ContentContainerNew>
        <SectionHeading>A number of projects have kept me busy recently</SectionHeading>
        <ol className="py-10 md:py-16">
          <ProjectCard
            title="Find the Menu"
            description={`A platform with two core features. First, a mini-website creation tool, allowing businesses to easily showcase their menus on a single page.\n\nSecond, an AI-powered recommendation system that helps users find the best places to eat in their chosen area. Using a Large Language Model, it processes multiple parameters to deliver highly personalized suggestions.`}
            href="https://findthe.menu"
          />
        </ol>
      </ContentContainerNew>
    </section>
  )
}
