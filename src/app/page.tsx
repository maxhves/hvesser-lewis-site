import Introduction from "@/app/sections/introduction/introduction";
import About from '@/app/sections/about/about';
import Experience from '@/app/sections/experience/experience';
import ResumeAd from '@/app/sections/resume_ad/resume_ad';
import Contact from '@/app/sections/contact/contact';
import Networks from '@/app/sections/networks/networks';
import Footer from '@/app/sections/footer/footer';

export default function Home() {
  return (
    <main>
      <Introduction/>
      <About/>
      <Experience/>
      <ResumeAd/>
      <Contact/>
      <Networks/>
      <Footer/>
    </main>
  )
}
