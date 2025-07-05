import Introduction from '@/app/home/components/introduction/introduction'
import { Expertise } from '@/app/home/components/expertise/expertise'
import Projects from '@/app/home/components/projects/projects'
import Widgets from '@/app/home/components/widgets/widgets'
import { notFound } from 'next/navigation';

export default function Home() {

  return notFound()

  return (
    <main className="flex-grow">
      <Introduction />
      <Widgets />
      <Expertise />
      <Projects />
    </main>
  )
}
