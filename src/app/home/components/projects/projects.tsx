import SectionHeading from '@/app/home/components/common/section-heading'
import { ContentContainerNew } from '@/components/ui/content-container'
import ProjectCard from '@/app/home/components/projects/components/project-card'
import { projectData } from '@/app/home/components/projects/project-data'

export default function Projects() {
  return (
    <section>
      <ContentContainerNew>
        <SectionHeading>A number of projects have kept me busy recently</SectionHeading>
        <ol className="space-y-5 py-10 md:py-16">
          {projectData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              href={project.href}
              imagePreview={project.imagePreview}
            />
          ))}
        </ol>
      </ContentContainerNew>
    </section>
  )
}
